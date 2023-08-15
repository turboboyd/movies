import { Link } from 'react-router-dom';
import CardFilm from '../CardFilm/CardFilm';
import PropTypes from 'prop-types';
import css from './GalleryFilm.module.css';

export default function GalleryFilm({ queryFilm, isOnMoviesPage }) {
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

GalleryFilm.propTypes = {
  queryFilm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOnMoviesPage: PropTypes.bool.isRequired,
};
