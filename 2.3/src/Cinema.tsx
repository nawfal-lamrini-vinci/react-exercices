interface CinemaProps {
  name?: string;
  movies: MovieProps[];
}

interface MovieProps {
  title: string;
  director: string;
}

export default function Cinema({ name, movies }: CinemaProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            <strong>{movie.title}</strong> - Réalisateur :{movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
}
