import React from "react";
import styled from "styled-components";
import bgBoost from "../../Assets/bg-boost-desktop.svg";
import { ShowcaseBox } from "../style/HeroStyle";
import { Btn1 } from "../style/MainStyle";

const BoostSection = styled.section`
  height: 250px;
  background: url(${bgBoost}) center center/cover no-repeat;
  background-color: #3b3054;
  display: grid;
  place-items: center;
  color: white;
`;

const Boost = () => {
  return (
    <BoostSection>
      <ShowcaseBox>
        <h2>Boost your links today</h2>
        <Btn1>
          <p>Get Started</p>{" "}
        </Btn1>
      </ShowcaseBox>
    </BoostSection>
  );
};

export default Boost;
