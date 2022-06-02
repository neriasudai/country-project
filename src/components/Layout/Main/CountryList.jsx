import React, { Fragment, useState, useContext } from "react";
import Country from "./Country";
import CountryContext from "../../../Context";
import PopUp from "../../PopUp/PopUp";
const CountryList = (props) => {
  const countriesContext = useContext(CountryContext);
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({});
  const { state } = countriesContext;
  const onClickHandler = (name) => {
    setShow(true);
    const countryData = state.find((item) => item.name.common === name);
    setCountry(countryData);
  };
  return (
    <Fragment>
      {show && (
        <PopUp show={show} onClose={() => setShow(false)} country={country} />
      )}
      {props.countriesList.map((item, i) => {
        return (
          <Country
            name={item.name.common}
            capital={item.capital}
            flag={item.flags.png}
            continents={item.continents[0]}
            key={i}
            eventClick={() => onClickHandler(item.name.common)}
          />
        );
      })}
    </Fragment>
  );
};

export default CountryList;
