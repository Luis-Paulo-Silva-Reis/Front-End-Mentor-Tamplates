import React from "react";
import styled from "styled-components";
import iconSuvs from "../img/iconSuvs.svg";

const Suvs = styled.div`
  background-color: hsl(184, 100%, 22%);
  width: 200px;
  height: 400px;
  padding: 2rem;
  font-size: 15px;
  color: white;

  button {
    color: hsl(184, 100%, 22%);
    background-color: white;
    border-radius: 16px;
    height: 32px;
  }

  h1{
    font-weight: 700;
  }

  p{
    font-weight: 700;
  }

  @media screen and (max-width: 720px) {
    width: 98%;
    height: 333px;
  }
`;

export default function SuvsCard() {
  return (
    <Suvs>
      <div>
        <img src={iconSuvs} alt="" />
        <h1>Suvs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button>Learn more</button>
      </div>
    </Suvs>
  );
}
