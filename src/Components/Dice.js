import React, { Component } from "react";

export default function Dice(props) {
  function handleClick(event) {
    console.log("test");
  }
  return (
    <div className="dice--container" onClick={(event) => handleClick(event)}>
      <h1 className="dice--item">{props.value}</h1>
    </div>
  );
}
