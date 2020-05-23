import React from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ onlyPost }) => {
  return (
    <article className="post" data-testid="post">
      {onlyPost === true && (
        <header className="post__header">
          <div className="user">
            <Link to="/users/alexandregw1" className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src={`https://api.adorable.io/avatars/250/${Date.now()}.png`} alt="Avatar @alexadregw1" />
              </div>
            </Link>

            <Link to="/users/alexandregw1" className="user__name">Alexandre Wolf</Link>
          </div>

          <button className="post__context" >
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={`https://picsum.photos/600?v=${Date.now()}`} alt="Post: Imagem randomica" />
      </figure>

      {onlyPost === true && (
        <nav className="post__controls">
          <button className="post__control" >
            <i className="fas fa-heart" />
          </button>

          <div className="post__status">
            <div className="user">
              <span>Curtido por Fulano e outras pessoas.</span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
