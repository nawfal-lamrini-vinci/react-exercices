interface CinemaProps {
  name?: string;
  firstTitle: string;
  firstDirector: string;
  secondTitle: string;
  secondDirector: string;
}

export default function Cinema({
  name,
  firstDirector,
  firstTitle,
  secondDirector,
  secondTitle,
}: CinemaProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          <strong>{firstTitle}</strong> - Réalisateur : {firstDirector}
        </li>
        <li>
          <strong>{secondTitle}</strong> - Réalisateur :{secondDirector}
        </li>
      </ul>
    </div>
  );
}
