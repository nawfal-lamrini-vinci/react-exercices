type CinemaProps = {
  name: string;
  movie1: MovieProps;
  movie2: MovieProps;
};

interface MovieProps {
  title: string;
  director: string;
}

export default function Cinema({ name, movie1, movie2 }: CinemaProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          <strong>{movie1.title}</strong> - Réalisateur : {movie1.director}
        </li>
        <li>
          <strong>{movie2.title}</strong> - Réalisateur :{movie2.director}
        </li>
      </ul>
    </div>
  );
}
