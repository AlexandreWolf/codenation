import React from 'react';

import './UserProfile.scss';

const UserProfile = () => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src={`https://api.adorable.io/avatars/250/${Date.now()}.png`} alt="Avatar @alexadregw1" />
              </div>
            </div>

            <p className="user__name">
              Alexandre Wolf
              <span>@alexandregw1</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
