import React from "react";
import styled from "styled-components";
import Luxury from "./Luxury";
import Sedans from "./Sedans";
import Suvs from "./Suvs";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  height: auto;
  padding: 5px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function mainContainer() {
  return (
    <Div>
      <Sedans />
      <Suvs />
      <Luxury />
    </Div>
  );
}
