import React, { Fragment } from "react";
import "../../../App.css";
const UserSearch = (props) => {
  return (
    <Fragment>
      <label htmlFor="searcg" className="header">
        Search by name:{" "}
        <input type="text" name="" id="" onChange={props.onChange} />
      </label>
    </Fragment>
  );
};

export default UserSearch;
