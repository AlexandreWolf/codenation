import React from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = () => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to="/users/alexandregw1" className="user__thumb">
              <img src={`https://api.adorable.io/avatars/250/${Date.now()}.png`} alt="Avatar @alexadregw1" />
            </Link>

            <Link to="/users/alexandregw1" className="user__name">Alexandre Wolf</Link>
          </div>

          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed" />
        </div>
      </div>

      <div className="container">
        <section className="story__video__wrapper">
          <video autoPlay loop playsInline className="video-player" src="" />
        </section>
      </div>
    </section>
  );
};

export default Story;
