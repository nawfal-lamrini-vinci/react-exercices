interface UserProps {
  users: User[];
}

interface User {
  name: string;
  age: number;
}

export default function Users({ users }: UserProps) {
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <p>Age : {user.age} ans</p>
        </div>
      ))}
    </>
  );
}
