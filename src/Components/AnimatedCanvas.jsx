import React, { useRef, useEffect } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const BALL_NUM = 30;
  const R = 2;
  let balls = []; // Changed from const to let
  const ballColor = { r: 207, g: 255, b: 4 };
  const alphaF = 0.03;
  const disLimit = 260;
  const linkLineWidth = 0.8;
  let canW, canH;
  let mouseIn = false;
  const mouseBall = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };

  const getRandomSpeed = (pos) => {
    const min = -1;
    const max = 1;
    switch (pos) {
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      default:
        return [0, 0];
    }
  };

  const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const randomNumFrom = (min, max) => Math.random() * (max - min) + min;

  const getRandomBall = () => {
    const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
      case 'top':
        return {
          x: randomSidePos(canW),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'right':
        return {
          x: canW + R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'bottom':
        return {
          x: randomSidePos(canW),
          y: canH + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'left':
        return {
          x: -R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      default:
        return null;
    }
  };

  const randomSidePos = (length) => Math.ceil(Math.random() * length);

  const renderBalls = (ctx) => {
    balls.forEach((b) => {
      if (!b.hasOwnProperty('type')) {
        ctx.fillStyle = `rgba(${ballColor.r},${ballColor.g},${ballColor.b},${b.alpha})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    });
  };

  const updateBalls = () => {
    const newBalls = [];
    balls.forEach((b) => {
      b.x += b.vx;
      b.y += b.vy;

      if (b.x > -50 && b.x < canW + 50 && b.y > -50 && b.y < canH + 50) {
        newBalls.push(b);
      }

      // alpha change
      b.phase += alphaF;
      b.alpha = Math.abs(Math.cos(b.phase));
    });

    balls = newBalls.slice(0); // Reassign the balls array
  };

  const renderLines = (ctx) => {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const fraction = getDisOf(balls[i], balls[j]) / disLimit;
        if (fraction < 1) {
          const alpha = (1 - fraction).toString();
          ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
          ctx.lineWidth = linkLineWidth;
          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };

  const getDisOf = (b1, b2) => {
    const deltaX = Math.abs(b1.x - b2.x);
    const deltaY = Math.abs(b1.y - b2.y);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const addBallIfy = () => {
    if (balls.length < BALL_NUM) {
      balls.push(getRandomBall());
    }
  };

  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canW, canH);

    renderBalls(ctx);
    renderLines(ctx);
    updateBalls();
    addBallIfy();

    window.requestAnimationFrame(render);
  };

  const initBalls = (num) => {
    for (let i = 1; i <= num; i++) {
      balls.push({
        x: randomSidePos(canW),
        y: randomSidePos(canH),
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      });
    }
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canW = canvas.width;
    canH = canvas.height;
  };

  useEffect(() => {
    initCanvas();
    initBalls(BALL_NUM);
    window.requestAnimationFrame(render);

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleMouseMove = (e) => {
      mouseBall.x = e.pageX;
      mouseBall.y = e.pageY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1 id="transparent-heading">Take one step</h1>
      <button className="btnn" id='role'><a href="#form-section">ENROLL NOW</a></button>
      <img src="/img/ai.png" alt=""  className='ai'/>
      <canvas id="nokey" ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasBackground;
