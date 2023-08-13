import axios from 'axios';

const fetch = require('node-fetch');
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjhjMTAyMDI0MDIyNTYxMDc5NjhmY2NiODcwZGE2MSIsInN1YiI6IjY0ZDNjYjdlZGQ5MjZhMDFlNzMyN2JhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B6ar64KXg9EGEEntonw5miWhTgtZbhfpHsRZyrME33s';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const startUrl = 'https://api.themoviedb.org/3/';
const language = `language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export async function fetchTrending(page) {
  const url = `${startUrl}trending/all/day?{language}&page=${page}`;
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

export async function fetchSearch(query, page) {
  const encodedQuery = encodeURIComponent(query);
  const url = `${startUrl}search/movie?include_adult=false&{language}&page=${page}&query=${encodedQuery}`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function fetchDetails(id) {
  const url = `${startUrl}movie/${id}?{language}`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function fetchCast(id) {
  const url = `${startUrl}movie/${id}/credits?{language}`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function fetchReviews(id) {
  const url = `${startUrl}movie/${id}/reviews?${language}`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function fetchTrailer(id) {
  const url = `${startUrl}movie/${id}/videos?${language}`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}
