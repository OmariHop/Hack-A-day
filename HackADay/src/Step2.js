import React from "react";
import "./Step2.css";

export default function Step2({ setValue, nextPage }) {
  return (
    <div>
      <h1>Regional Food</h1>
      <button
        onClick={() => {
          setValue("mexico");
          nextPage();
        }}
      >
        Mexico
      </button>
      <button
        onClick={() => {
          setValue("china");
          nextPage();
        }}
      >
        China
      </button>
      <button
        onClick={() => {
          setValue("america");
          nextPage();
        }}
      >
        America
      </button>
      <button
        onClick={() => {
          setValue("italy");
          nextPage();
        }}
      >
        Italy
      </button>
      <button
        onClick={() => {
          setValue("korea");
          nextPage();
        }}
      >
        Korea
      </button>
      <button
        onClick={() => {
          setValue("philipines");
          nextPage();
        }}
      >
        Philipines
      </button>
      <button
        onClick={() => {
          setValue("india");
          nextPage();
        }}
      >
        India
      </button>
      <button
        onClick={() => {
          setValue("jamaica");
          nextPage();
        }}
      >
        Jamaica
      </button>
      <button
        onClick={() => {
          setValue("japan");
          nextPage();
        }}
      >
        Japan
      </button>
    </div>
  );
}
