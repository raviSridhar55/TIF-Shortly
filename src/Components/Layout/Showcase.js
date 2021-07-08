import React from 'react';
import { ShowCaseSection, ShowcaseBox } from '../style/HeroStyle';
import { Container } from '../style/MainStyle';

const Showcase = () => {
  return (
    <ShowCaseSection>
      <Container>
        <ShowcaseBox>
          <h1>advanced statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </ShowcaseBox>
      </Container>
    </ShowCaseSection>
  );
};

export default Showcase;
