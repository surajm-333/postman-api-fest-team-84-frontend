import React, { Component } from 'react';
import BookImgCard from './BookImgCard';
import './HomePageStyle.css';
function HomePage() {
    return (
        <div className="HomePage">
            <h2>invisibletext </h2>
            <h3>invisibletext </h3>
            <div className="row">
                <h2 className='row-heading'>Top Reads</h2>
                {/* <!-- Flickity HTML init --> */}
                <div class="carousel" data-flickity='{ "autoPlay":true , "autoPlay": 3000 , "groupCells": 2 ,"groupCells": true }'>
                    <div class="carousel-cell"><BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                </div>
            </div>
            <div className="row">
                <h2 className='row-heading'>Top Reads</h2>
                {/* <!-- Flickity HTML init --> */}
                <div class="carousel" data-flickity='{ "autoPlay":true , "groupCells": 2 ,"autoPlay": 3000 ,"groupCells": true }'>
                    <div class="carousel-cell"><BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                </div>
            </div>
            <div className="row">
                <h2 className='row-heading'>Top Reads</h2>
                {/* <!-- Flickity HTML init --> */}
                <div class="carousel" data-flickity='{ "autoPlay":true , "groupCells": 2 ,"autoPlay": 3000 , "freeScroll": true, "groupCells": true }'>
                    <div class="carousel-cell"><BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                    <div class="carousel-cell"> <BookImgCard /> </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;