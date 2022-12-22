import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './GuestCarousel.css';

import tempAvatar from '../../assets/Temp-avatar.jpg';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  
const GuestCarousel = () => {

  return (
    <Carousel responsive={responsive} className="guest__card__container">
      <div className="guest__card">
        <img src={tempAvatar}/>
        <div className="guest__card__text">
          <h1>Event Guest</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aperiam.</p>
        </div>
      </div>

      <div className="guest__card">
        <img src={tempAvatar}/>
        <div className="guest__card__text">
          <h1>Event Guest</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aperiam.</p>
        </div>
      </div>


    </Carousel>
  );
};

export default GuestCarousel;
