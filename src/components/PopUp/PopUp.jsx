import React from "react";
import "./PopUp.css";
const PopUp = (props) => {
  const { country } = props;
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src={country.flags.png} alt="" className="flag_img" />
          <h2 className="modal-title">{country.name.common}</h2>
          <h5>Capital: {country.capital ? country.capital : "no capital"}</h5>
        </div>
        <div className="modal-body">
          <p>Population : {country.population}</p>
          <p>Region : {country.region}</p>
          <p>Subregion : {country.subregion}</p>
          <p>Languages : {Object.values(country.languages).join(" ")}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
