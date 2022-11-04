import axios from 'axios';
import { useEffect, useState } from 'react';
import './movies.scss';
import SearchIcon from '../../assets/images/search.svg';
import MovieCard from '../MovieCard/MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=82587c0e';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title: string) => {
    const response = await axios.get(`${API_URL}&s=${title}`);

    setMovies(response.data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  }, []);

  return (
    <div className="movies">
      <h1 className="movies__title">MovieLand</h1>
      <form onSubmit={(e) => { e.preventDefault(); }} className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={() => searchMovies(search)}>
          <img className="search__icon" src={SearchIcon} alt="search icon" />
        </button>
      </form>
      {
        movies !== undefined ? (
          <div className="container">
            {
              movies.map(({
                Year, Type, Poster, Title, imdbID,
              }) => (
                <MovieCard
                  key={imdbID}
                  year={Year}
                  type={Type}
                  image={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
                  title={Title}
                />
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
};

export default Movies;
