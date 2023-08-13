
const fetch = require('node-fetch');
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjhjMTAyMDI0MDIyNTYxMDc5NjhmY2NiODcwZGE2MSIsInN1YiI6IjY0ZDNjYjdlZGQ5MjZhMDFlNzMyN2JhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B6ar64KXg9EGEEntonw5miWhTgtZbhfpHsRZyrME33s';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
};
  
export async function fetchTrending(page) {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;


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
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${page}&query=${encodedQuery}`;


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
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}







