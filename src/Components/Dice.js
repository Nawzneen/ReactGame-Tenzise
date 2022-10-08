import React, { Component } from "react";

export default function Dice(props) {
  return (
    <div
      className={props.isHeld ? "dice--container isHeld " : "dice--container  "}
      onClick={() => props.holdDice(props.id)}
    >
      <h1 className="dice--item">{props.value}</h1>
    </div>
  );
}
