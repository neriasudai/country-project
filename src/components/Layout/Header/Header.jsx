import React from "react";
import UserSearch from "./UserSearch";

export const Header = (props) => {
  return (
    <div className="header">
      <UserSearch onChange={props.onChange} />
    </div>
  );
};
