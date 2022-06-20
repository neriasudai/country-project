import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./components/Layout/Main/Main";
import CountryContext from "./Context";
import { Header } from "./components/Layout/Header/Header";
function App() {
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    const req = fetch(URL);
    req
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangeHandler = (e) => {
    setState(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Header onChange={onChangeHandler} />
      <hr />
      <CountryContext.Provider value={{ state }}>
        <Main
          countriesList={state}
          onChange={onChangeHandler}
          countryNumber={state.length || 0}
        />
      </CountryContext.Provider>
    </div>
  );
}

export default App;
