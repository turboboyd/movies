// Замените 'YOUR_API_KEY' на ваш ключ API TMDb
const API_KEY ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjhjMTAyMDI0MDIyNTYxMDc5NjhmY2NiODcwZGE2MSIsInN1YiI6IjY0ZDNjYjdlZGQ5MjZhMDFlNzMyN2JhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B6ar64KXg9EGEEntonw5miWhTgtZbhfpHsRZyrME33s';

// Шаг 1: Получение гостевой сессии
fetch(
  `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`
)
  .then(response => response.json())
  .then(data => {
    const guestSessionId = data.guest_session_id;

    // Шаг 2: Оценка фильма с использованием гостевой сессии
    const movieId = 123; // ID фильма, который вы хотите оценить
    const rating = 8.5; // Оценка фильма

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          value: rating,
        }),
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Фильм оценен успешно!');
        } else {
          console.error('Произошла ошибка при оценке фильма.');
        }
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
