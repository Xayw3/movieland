import { FC } from 'react';
import './movie-card.scss';

type MovieProps = {
  year: string,
  image: string,
  type: string,
  title: string,
}

const MovieCard: FC<MovieProps> = ({
  year, image, type, title,
}) => (
  <div className="movie">
    <div className="movie__year">
      <p>{year}</p>
    </div>
    <div className="movie__image">
      <img src={image} alt={title} />
    </div>
    <div className="movie__details">
      <span className="movie__details_type">{type}</span>
      <h3 className="movie__details_title">{title}</h3>
    </div>
  </div>
);

export default MovieCard;
