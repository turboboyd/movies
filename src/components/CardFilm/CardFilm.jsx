// import React, { useState, useEffect } from 'react';
import css from './CardFilm.module.css';
import defaultImg from '../../images/default-img.jpg'

export default function CardFilm({
  id,
  title,
  src,
  rating,
  data,
  description,
  name,
  first_air_date,

}) {
  const displayTitle = title || name;
  const displayData = data || first_air_date;
  const displayImg = src ? `https://image.tmdb.org/t/p/w500${src}` : defaultImg;
  return (
    <li className={css.news_card}>
      <img className={css.news_card__image} src={displayImg} alt={title} />
      <div className={css.news_card__text_wrapper}>
        <div className={css.news_card__top_text}>
          <h2 className={css.news_card__title}>{displayTitle}</h2>
          <span className={css.rating}>
            {Math.round(parseFloat(rating) * 10) / 10}
          </span>
        </div>
        <p className={css.news_card__post_date}>{displayData}</p>
        <div className={css.news_card__details_wrapper}>
          <p className={css.news_card__excerpt}>{description}</p>
        </div>
      </div>
    </li>
  );
}
