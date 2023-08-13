import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchCast } from '../../servise/Servise';
import css from './Сast.module.css';
import { CgProfile } from 'react-icons/cg';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const queryData = await fetchCast(movieId);
        setCasts(queryData.cast);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <ul className={css.wrap}>
      {casts.map(cast => (
        <li className={css.card} key={cast.id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="150"
              loading="lazy"
            />
          ) : (
            <CgProfile size={100} color="white" />
          )}
          <div className={css.wrap_actor}>
            <h3 className={css.actor}>{cast.name}</h3>
            <p>{cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};
