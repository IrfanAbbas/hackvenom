import React from 'react';
import Eathical from './EathiCal';
import HandTouch from './HandTouch';
import CyberSecurity from './CyberSecurity';
import Form from './Form';
// import AnimatedCanvas from './AnimatedCanvas';

export default function Home() {

  return (
    <>
      <div className="container-fluid full-screen-container bg-black text-white home">
        <div className="left-side-container">
          <h1>BLACK &nbsp;&nbsp;<span>HAT</span></h1>
          <p>PENETRATION TESTING</p>
          <button className="btnn"><a href="#form-section">ENROLL NOW</a></button>
          
        </div>

      </div>
      {/* <AnimatedCanvas /> */}
      <Eathical />
      <HandTouch />
      <CyberSecurity />
      <Form />
    </>
  );
}
