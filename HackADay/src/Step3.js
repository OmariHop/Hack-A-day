import React from "react";
import { getRestaurant } from "./proxy";

export default function Step3({ culture, diet, nextPage }) {
  const restaurants = getRestaurant(culture, diet);
  console.log(restaurants);
  console.log(culture);
  console.log(diet);
  return (
    <div>
      <h1>Your randomized restaurant is</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {restaurants.map((rest) => {
          return (
            <div
              style={{
                padding: "0.25rem",
                size: "1.25rem",
                margin: "0.5rem",
                width: "5rem",
                backgroundColor: "#66fc03"
              }}
            >
              {rest}
            </div>
          );
        })}
      </div>
      <button onClick={() => nextPage()}>Try again</button>
    </div>
  );
}
