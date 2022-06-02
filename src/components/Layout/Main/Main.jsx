import CountryList from "./CountryList";
import "./Main.css";

export const Main = (props) => {
  return (
    <div className="main">
      <h2>
        CountryList <span>({props.countryNumber})</span>
      </h2>
      <CountryList
        countriesList={props.countriesList}
        onChange={props.onChange}
        countryNumber={props.countryNumber}
      />
    </div>
  );
};
