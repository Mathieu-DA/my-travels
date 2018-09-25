import React from "react";

const Travel = ({ destination, country, image, distance }) => (
  <figure>
    <img src={image} alt={destination} />
    <figcaption>
      <p>{destination}</p>
      <p><b>{country}</b></p>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;