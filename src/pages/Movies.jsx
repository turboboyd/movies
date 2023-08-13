import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearch } from 'servise/Servise';
import Search from '../components/Search/Search';
import CardFilm from 'components/CardFilm/CardFilm';
import css from './Movies.module.css'
import LoadMoreBtn from 'components/LoadMore/LoadMoreBtn';
// import css from '../components/vse.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [queryFilm, setQueryFilm] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const searchName = ({query}) => {
    console.log('name: ', query);
    setQuery(query);
  }
  useEffect(() => {
    if (!query) {
      return;
    }
    setShowLoadMore(false);
    async function fetchData() {
      const queryFilmData = await fetchSearch(query, page);
      console.log('Запрос: ', query);
      console.log('queryFilmData: ', queryFilmData);
      setQueryFilm(queryFilmData.results);
      console.log('queryFilmData: ', queryFilmData);
      if (page === queryFilmData.total_pages) {
        return
      }
      setShowLoadMore(true);
    }
    fetchData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {!query && (<div>
        <h1 className={css.title}>Find your favourite movie</h1>
        <p className={css.text}>Search by title, character, or gernre</p>
      </div>)}
      <Search searchName={searchName} />
      {query && (
        <div className={css.results_wrap}>
          <p className={css.results}>Search results for:</p>
          <h2 className={css.results_serch}>{query}</h2>
        </div>
      )}

      <ul className={css.content_wrapper}>
        {queryFilm.map(
          ({
            id,
            title,
            vote_average,
            release_date,
            poster_path,
            backdrop_path,
            overview,
          }) => (
            <Link key={id} to={`${id}`}>
              <CardFilm
                title={title}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                rating={vote_average}
                data={release_date}
                description={overview}
              />
            </Link>
          )
        )}
      </ul>
      {showLoadMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
}
