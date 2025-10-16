import Cinema from "./Cinema";
import PageTitle from "./PageTitle";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        firstTitle={cinema1Movie1Title}
        firstDirector={cinema1Movie1Director}
        secondTitle={cinema1Movie2Title}
        secondDirector={cinema1Movie2Director}
      />

      <Cinema
        name={cinema2Name}
        firstTitle={cinema2Movie1Title}
        firstDirector={cinema2Movie1Director}
        secondTitle={cinema2Movie2Title}
        secondDirector={cinema2Movie2Director}
      />
    </div>
  );
};

export default App;
