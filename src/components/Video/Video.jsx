import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./Video.css";

import { RiPlayCircleFill } from "react-icons/ri";
import tempVidImg from "../../assets/VideoImg.jpg";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="video" className="container">
      <div className="video__card">
        <div className="video__card__text">
          <h1>
            Celebrating our games!
            <br />
            giving back to our <br /> communities!
          </h1>
          <span>
            All-Star Charity Shootout(ASCS) 2023 <br /> Let the game begin!
          </span>
        </div>

        <div
          className="video__card__yt"
          style={{
            backgroundImage: `url(${tempVidImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setOpen(!isOpen)}
        >
          <RiPlayCircleFill size="20%" />
          <ModalVideo channel="youtube" isOpen={isOpen} videoId="xoBE5KyZFb8" onClose={() => setOpen(false)} autoplay />
        </div>
      </div>
    </section>
  );
};

export default Video;
