import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from '../components/vse.module.css';
import CardFilm from '../components/CardFilm/CardFilm';
import { fetchTrending } from '../servise/Servise';
import LoadMoreBtn from 'components/LoadMore/LoadMoreBtn';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    setShowLoadMore(false);
    setIsLoading(true);
    async function fetchData() {
      const trendingData = await fetchTrending(page);
      setIsLoading(false);
      setTrending(prev => [...prev, ...trendingData.results]);
      console.log('trendingData.results: ', trendingData.results);
      if (page >= trendingData.total_pages) {
        return;
      }
      setShowLoadMore(true);
    }
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ul className={css.content_wrapper}>
        {trending.map(
          ({
            id,
            title,
            vote_average,
            release_date,
            poster_path,
            backdrop_path,
            overview,
          }) => (
            <Link key={id} to={`/movies/${id}`}>
              <CardFilm
                title={title}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                rating={Math.round(vote_average)}
                data={release_date}
                description={overview}
              />
            </Link>
          )
        )}
      </ul>
      {showLoadMore && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} disabled={isLoading} />
      )}
    </>
  );
}
