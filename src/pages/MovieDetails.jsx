import React, { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchDetails } from 'servise/Servise';
import { animateScroll as scroll } from 'react-scroll';
import css from './MovieDetails.module.css';
import GenreItem from '../components/GenreItem/GenreItem';
import ProductionCompany from 'components/ProductionCompany/ProductionCompany';
import defaultImg from '../images/default-img.jpg';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    if (!movieId) {
      console.log('est');
      return;
    }
    async function fetchData() {
      try {
        const queryData = await fetchDetails(movieId);
        console.log('queryData: ', queryData);
        setFilm(queryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  const scrollToCast = () => {
    scroll.scrollTo(800);
  };
  const displayImg = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : defaultImg;
  return (
    <>
      <Link to="/">
        <button>НАЗАД</button>
      </Link>
      <>
        <div className={css.details}>
          <a href={film.homepage} target="_blank" rel="noopener noreferrer">
            <img
              className={css.poster}
              src={displayImg}
              alt={film.original_title}
              loading="lazy"
            />
          </a>
          <div className={css.details_wrap_description}>
            <div className={css.details_wrap_title}>
              <h1 className={css.title}>{film.original_title}</h1>
              <span className={css.rating}>
                {Math.round(parseFloat(film.vote_average) * 10) / 10}
              </span>
            </div>
            <div className={css.details_wrap_date}>
              <p className={css.details_text}>Release:</p>
              <span className={css.details_text}>{film.release_date}</span>
              <div>
                <div>
                  {film.genres && (
                    <ul className={css.item_genres}>
                      {film.genres.map(genre => (
                        <GenreItem key={genre.id} genre={genre} />
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <span className={css.details_text}>{film.runtime}</span>
            <span className={css.details_text}>{film.vote_count}</span>
            <p className={css.details_text}>{film.homepage}</p>

            <p className={css.details_text}>{film.overview}</p>

            <div className={css.product_wrap}>
              {film.production_companies &&
              film.production_companies.length > 0 ? (
                <ul className={css.details_company}>
                  {film.production_companies.map(company => (
                    <ProductionCompany key={company.id} company={company} />
                  ))}
                </ul>
              ) : (
                <p>No production companies available.</p>
              )}
            </div>
            <ul className={css.list_link}>
              <li>
                <Link
                  className={css.details_link}
                  to="cast"
                  smooth="true"
                  onClick={scrollToCast}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={css.details_link}
                  to="reviews"
                  smooth="true"
                  onClick={scrollToCast}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className={css.details_link}
                  to="trailer"
                  smooth="true"
                  onClick={scrollToCast}
                >
                  Trailer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={<div>loding21</div>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
}
