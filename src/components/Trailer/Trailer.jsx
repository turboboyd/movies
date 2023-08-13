import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchTrailer } from '../../servise/Servise';
import YouTube from 'react-youtube';
import css from './Trailer.module.css';

export default function Trailer() {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchData() {
      try {
        const { results: queryResults } = await fetchTrailer(movieId);
        console.log('Video: ', queryResults);
        setTrailer(queryResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex =>
      prevIndex === trailer.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(prevIndex =>
      prevIndex === 0 ? trailer.length - 1 : prevIndex - 1
    );
  };

  const currentVideo = trailer[currentVideoIndex];

  const youtubeOpts = {
    height: '600px',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      {trailer.length > 0 && (
        <div>
          <h2>{currentVideo.name}</h2>
          <p>{currentVideo.type}</p>
          <YouTube videoId={currentVideo.key} opts={youtubeOpts} />
          <div>
            <button onClick={handlePrevVideo}>Previous</button>
            <button onClick={handleNextVideo}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

Trailer.propTypes = {
  movieId: PropTypes.number,
};
