import Card from "./Card";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import Users from "./Users";

const App = () => {
  const title = "Welcome to My App";
  const users = [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    },
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <Users users={users} />

      <Card name="Alice" age={25} status={true} />
      <Card name="Nawfal" age={25} status={false} />
      <Card name="Robert" age={10} status={false} />

      <Footer text={footerText} />
    </div>
  );
};

export default App;
