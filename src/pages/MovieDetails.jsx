import { useState, useEffect, Suspense } from 'react';
import { fetchDetails } from 'servise/Servise';
import css from './MovieDetails.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import GenreItem from '../components/GenreItem/GenreItem';
import ProductionCompany from 'components/ProductionCompany/ProductionCompany';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId: ', movieId);
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true); // Добавляем состояние загрузки

  useEffect(() => {
    if (!movieId) {
      console.log('est');
      return;
    }
    async function fetchData() {
      try {
        const queryData = await fetchDetails(movieId);
        console.log('queryData: ', queryData);
        console.log('movieId: ', movieId);
        setFilm(queryData);
        setLoading(false); // Устанавливаем состояние загрузки в false после успешной загрузки
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Устанавливаем состояние загрузки в false при возникновении ошибки
      }
    }

    fetchData();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>; // Отображаем сообщение о загрузке
  }

  return (
    <>
      <Link>
        <button>НАЗАД</button>
      </Link>
      <>
        <div className={css.details}>
          <img
            className={css.poster}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : '/img/default-poster.jpg'
            }
            alt={film.original_title}
          />

          <div className={css.details_wrap_description}>
            <div className={css.details_wrap_title}>
              <h1 className={css.title}>{film.original_title}</h1>
              <span className={css.rating}>
                {Math.round(parseFloat(film.vote_average) * 10) / 10}
              </span>
            </div>
            <div className={css.details_wrap_date}>
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

            <div className="">
              <ul className={css.details_company}>
                {film.production_companies.map(company => (
                  <ProductionCompany key={company.id} company={company} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Link to="cast">cat</Link>
        <p></p>
        <Link to="reviews">reviews</Link>
        <Suspense fallback={<div>loding21</div>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
}
