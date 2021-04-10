import React from "react";
import styled from "styled-components";
import iconSedans from "../img/iconSedans.svg";

const Sedans = styled.div`
  width: 200px;
  height: 400px;
  padding: 2rem;
  background-color: hsl(31, 77%, 52%);
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  font-size: 15px;
  color: white;

  button {
    color: hsl(31, 77%, 52%);
    background-color: white;
    border-radius: 16px;
    height: 32px;
  }

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }

  @media screen and (max-width: 720px) {
    width: 98%;
    height: 333px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

export default function SedansCard() {
  return (
    <Sedans>
      <div>
        <img src={iconSedans} alt="" />
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button>Learn more</button>
      </div>
    </Sedans>
  );
}
