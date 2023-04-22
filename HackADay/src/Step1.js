import React from "react";
import "./Step1.css";

export default function Step1({ setValue, nextPage }) {
  return (
    <div>
      <h1>Ez Eats</h1>
      <button
        onClick={() => {
          setValue("vegan");
          nextPage();
        }}
      >
        Vegan
      </button>
      <button
        onClick={() => {
          setValue("vegetarian");
          nextPage();
        }}
      >
        Vegetarian
      </button>
      <button
        onClick={() => {
          setValue("normal");
          nextPage();
        }}
      >
        Normal
      </button>
    </div>
  );
}
