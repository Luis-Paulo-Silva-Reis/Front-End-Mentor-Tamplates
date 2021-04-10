import React from "react";
import styled from "styled-components";
import luxuryimg from "../img/luxuryimg.svg";

const Luxury = styled.div`
  background-color: hsl(179, 100%, 13%);
  width: 200px;
  height: 400px;
  padding: 2rem;
  color: white;
  font-size: 15px;

  button {
    color: hsl(179, 100%, 13%);
    background-color: white;
    border-radius: 16px;
    height: 32px;
  }

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }

  @media screen and (max-width: 720px) {
    width: 98%;
    height: 333px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

export default function LuxuryCard() {
  return (
    <Luxury>
      <div>
        <img src={luxuryimg} alt="" />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn more</button>
      </div>
    </Luxury>
  );
}
