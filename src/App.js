import { useEffect, useState } from 'react';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

import './App.css';
import Header from './components/Header/Header';
import MovieItem from './components/MovieItem/MovieItem';

function App() {
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=> {
    if(search === '') {
      setIsLoading(false);
      setMovieList([]);
      return;
    }

    setIsLoading(true);

    const timeout = setTimeout(async () => {
      try {
        const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=30ff1b03`);
        setMovieList(data.Search);
        console.log(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }  
    }, 2000);
              //return void
    return () => clearTimeout(timeout);

  }, [search]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      {isLoading ? (
        <div className="loaderWrapper">
          <PacmanLoader color="#fff" />
        </div>
      ) : isError ? (
        "Greska"
      ) : (
        movieList &&
        Array.isArray(movieList) && (
          <div className="moviesWrapper">
            {movieList.map((movie) => (
              <MovieItem
                title={movie.Title}
                poster={movie.Poster}
                imdbID={movie.imdbID}
              />
            ))}
          </div>
        )
      )}
    </>
  );
}

export default App;
