import React from "react";

import './Stories.scss';

const Stories = () => {
  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button key="1" className="user__thumb user__thumb--hasNew" >
            <div className="user__thumb__wrapper">
              <img src={`https://api.adorable.io/avatars/250/${Date.now()}.png`} alt="Avatar @alexadregw1" />
            </div>
          </button>
          <button key="2" className="user__thumb" >
            <div className="user__thumb__wrapper">
              <img src={`https://api.adorable.io/avatars/250/${Date.now()+1}.png`} alt="Avatar: T'Chala" />
            </div>
          </button>
          <button key="3" className="user__thumb user__thumb--hasNew" >
            <div className="user__thumb__wrapper">
              <img src={`https://api.adorable.io/avatars/250/${Date.now()+2}.png`} alt="Avatar: Bruce Wayne" />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
export default Stories;
