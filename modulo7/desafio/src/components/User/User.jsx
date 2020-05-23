import React from 'react';
import { Link } from 'react-router-dom';

import './User.scss';

const User = ()  => {
  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to="/users/alexandregw1" className="user">
          <div className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src={`https://api.adorable.io/avatars/250/${Date.now()}.png`} alt="Avatar @alexadregw1" />
            </div>
          </div>

          <div className="user__name">Alexandre Wolf</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
