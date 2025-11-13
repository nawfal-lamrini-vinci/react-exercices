import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      <ClickCounter
        title="Counter"
        message="You are a master in the art of clicking !."
        warning="Please click on me now !."
      />
    </div>
  );
};

export default App;
