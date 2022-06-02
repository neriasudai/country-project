import React, { Fragment } from "react";
import "./Main.css";
const Country = (props) => {
  return (
    <Fragment>
      <div className="country_item" onClick={props.eventClick}>
        <img src={props.flag} alt="" className="flag_img" />
        <div className="country_text_info">
          <h3>
            {props.name} - <span>{props.capital}</span>
          </h3>
          <h5>{props.continents}</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Country;
