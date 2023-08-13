import { Link } from 'react-router-dom';
import CardFilm from '../CardFilm/CardFilm';
import css from './Gallery.module.css';


export default function Gallery({ queryFilm, isOnMoviesPage }) {
    console.log('isOnMoviesPage: ', isOnMoviesPage);
  return (
    <ul className={css.content_wrapper}>
      {queryFilm.map(
        ({
          id,
          title,
          vote_average,
          release_date,
          poster_path,
          overview,
          name,
          first_air_date,
        }) => (
          <Link key={id} to={isOnMoviesPage ? `${id}` : `/movies/${id}`}>
            <CardFilm
              title={title}
              src={poster_path}
              rating={vote_average}
              data={release_date}
              description={overview}
              name={name}
              poster_path={first_air_date}
            />
          </Link>
        )
      )}
    </ul>
  );
}
