import React, { useEffect, useRef, useState } from "react";

import Lottie from "react-lottie";
import grayBb from "../../assets/gray-basketball.svg";
import wavyBorder from "../../assets/wavy-border.json";
import "./About.css";

const About = () => {
  const aboutRef = useRef();
  const [isOkay, setOkay] = useState(false);

  const getPosition = () => {
    var offsetAbout = aboutRef.current.offsetTop;
    if (offsetAbout <= window.scrollY) {
      setOkay(true);
    } else {
      setOkay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, []);

  // lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wavyBorder,
  };

  return (
    <section id="about" className="container" ref={aboutRef}>
      <div className="ball__holder">
        <img src={grayBb}/>
      </div>

      <div className="about__title">
        <h1>
          Why
          <br />
          All-star
          <br />
          Charity Shootout?
        </h1>
      </div>

      <div className="about__info">
        <div className="about__info__block">
          <h1>Mission</h1>
          <p>All-Star Charity Shootout's mission is to assist charitable organizations, through the mobilization of high calibre sporting events.</p>
          <Lottie options={defaultOptions} speed={0.5} />
        </div>

        <div className="about__info__block">
          <h1>Introduction</h1>
          <p>
            All-Star Charity Shootout (ASCS) is a celebration of Canadian basketball at its best. The event will showcase 20 of Canada’s most talented
            university, college, and professional basketball stars.
          </p>
          <p>
            More than just a high caliber basketball game, ASCS is an educational experience. This high-profile event uses basketball as a tool to
            create unique and exciting learning experiences that will educate basketball enthusiasts and players about worthwhile charitable causes in
            their communities.
          </p>
          <p>
            For 5 years, ASCS has worked with charities such as Heart and Stroke Foundation, YMCA, Kids Help Phone, War Child Canada, and London
            Children Museum to raise funds and awareness for their local programs.
          </p>
          <Lottie options={defaultOptions} speed={0.5} />
        </div>
      </div>
    </section>
  );
};

export default About;
