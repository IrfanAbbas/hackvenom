import React from 'react'

export default function EathiCal() {
    function clickme() {
        window.open("https://wa.me/+923218517228", "_blank");
    }
  return (
    <div className="Second-container">
     
        <div className="linux-container">
        <h1>EATHICAL HACKING</h1>
            <img src="/img/linux.png" className="linux-img" alt="linux" />
        </div>
        <div className="card-container">
        <h1>EATHICAL HACKING</h1>
            <div className="left-card">
         
            <div className="card left-card-con" onClick={clickme}>   
            <img src="/img/linux.png" alt=""className="linux-img" />
                <p>Eathical hacking</p>
            </div>
            <div className="card  left-card-con" onClick={clickme}>  
            <img src="/img/shiled.png" alt=""className="linux-img" />
                <p>WebDev</p>
            </div>
                
            </div>
            <div className="right-card" onClick={clickme}>
            <div className="card"> 
            <img src="/img/logo.png" alt=""className="linux-img" />
                <p>Security Testing</p> 
            </div>
            <div className="card" onClick={clickme}> 
            <img src="/img/ai.png" alt=""className="linux-img" />
                <p>Advance AI Sol</p> 
            </div>
            <div className="card" onClick={clickme}>  
            <img src="/img/hack.jpg" alt=""className="linux-img" />
                <p>Protaction from<br/> hacker</p>
            </div>
            </div>

        </div>
    </div>
  )
}
