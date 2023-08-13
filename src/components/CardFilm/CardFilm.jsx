// import React, { useState, useEffect } from 'react';
import css from './CardFilm.module.css';

export default function CardFilm({
  id,
  title,
  src,
  rating,
  data,
  description,
}) {
  return (
    <li className={css.news_card}>
      <img className={css.news_card__image} src={src} alt={title} />
      <div className={css.news_card__text_wrapper}>
        <h2 className={css.news_card__title}>{title}</h2>
        <div className={css.news_card__post_date}>{data}</div>
        <div className={css.news_card__details_wrapper}>
          <p className={css.news_card__excerpt}>{description}</p>
          {/* <a href="#" className={css.news_card__read_more}>
            Read more <i className={css.fas}></i>
          </a> */}
        </div>
        {/* <span>Rating: {rating}</span>
        <p>{data}</p> */}
      </div>
    </li>
  );
}
