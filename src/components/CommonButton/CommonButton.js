import React from "react";
import "./CommonButton.css";

const CommonButton = (props) => {
  return (
    <>
      <button className="common_button">{props.name}</button>
    </>
  );
};

export default CommonButton;
