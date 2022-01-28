import React, { Component } from 'react';
import bg from './BookBg.jpg';
import './LandingStyle.css';
function LandingPage() {
    return ( 
        <div className="LandingPage">
            <img  id='bg-image' src={bg} alt="" />
            <div className="centered">
             <h1 >
                 Welcome to <br/> E-Library
             </h1>
             <div className='subText'>
             <h5>A place full of books</h5>
                 <span className='spantext'>10000+ books </span>
                 <span className='spantext'>10000+ downloads </span>
             </div>
            <div className="buttons-div">
            <button type="button" className="btn btn-success ">Login</button>
            <button type="button" className="btn btn-secondary">Login(Admin)</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
            </div>
        </div>
     );
}

export default LandingPage ;
