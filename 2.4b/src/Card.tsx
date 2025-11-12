import "./card.css";

interface UserProps {
  name: string;
  age: number;
  status: boolean;
}

export default function Card(props: UserProps) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Age: {props.age} years</p>
      <p className={props.status ? "online" : "offline"}>
        {props.status ? "En ligne" : "Hors ligne"}
      </p>
    </div>
  );
}
