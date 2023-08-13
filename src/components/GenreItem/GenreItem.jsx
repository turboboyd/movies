// GenreItem.jsx

import React from 'react';
import css from './GenreItem.module.css'
export default function GenreItem({ genre }) {
  return (
    <li className={css.item}>
      <p className={css.details_text}>{genre.name}</p>
    </li>
  );
}
