import React, { Component } from "react";

export default function Dice(props) {
  return (
    <div
      className="dice--container"
      onClick={(event) => props.selectDice(event, props.index)}
    >
      <h1 className="dice--item">{props.value}</h1>
    </div>
  );
}
