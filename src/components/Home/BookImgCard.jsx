import React, { Component } from 'react';
// import bookimg from './BookBg.jpg'
import bookimg from './wings.jpg'
import './HomePageStyle.css'
function BookImgCard() {
    return ( 
        <div className="BookImgCard">
            <a href=""><img id='card-img' src={bookimg} alt="" /></a>
        </div>
     );
}

export default BookImgCard;