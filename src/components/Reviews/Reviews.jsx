import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../../servise/Servise';
import css from './Reviews.module.css';
import { CgProfile } from 'react-icons/cg';
import formatDateTime from './data';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchData() {
      try {
        const { results: queryResults } = await fetchReviews(movieId); // Destructuring here
        setReviews(queryResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.wrap}>
          {reviews.map(
            ({
              id,
              author_details: { name, avatar_path, rating },
              created_at,
              content,
            }) => (
              <li key={id}>
                <div className={css.card}>
                  <h3 className={css.author}>{name}</h3>
                  {avatar_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
                      alt={name}
                      width="150"
                      loading="lazy"
                    />
                  ) : (
                    <CgProfile size={50} color="white" />
                  )}
                  <p>
                    User Rating: <span>{rating}</span>
                  </p>
                  <p>
                    <span>{formatDateTime(created_at)}</span>
                  </p>
                </div>
                <p className={css.text}>{content}</p>
              </li>
            )
          )}
        </ul>
      ) : (
        <div className={css.wrap}>
          <p className={css.reviews_not}>Unfortunately there are no reviews.</p>
        </div>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.number,
};
