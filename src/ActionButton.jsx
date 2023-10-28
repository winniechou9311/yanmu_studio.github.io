import React from "react";

export function ActionButton({ text, onClick }) {
  return (
    <button className="ActionButton" onClick={onClick}>
      {text}
    </button>
  );
}
