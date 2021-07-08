import React from 'react';
import illustation from '../../Assets/illustration-working.svg';

import {
  HeroSection,
  Section1,
  Section2,
  Title,
  Lead,
  Section1Content,
} from '../style/HeroStyle';
import { Btn1 } from '../style/MainStyle';
const Hero = () => {
  return (
    <HeroSection>
      <Section1>
        <Section1Content>
          <Title>More than just shorter links</Title>
          <Lead>
            Bulid your brand's recognition and get detailed insights on how your
            links are performing.
          </Lead>
          <Btn1>
            <p>Get Started</p>
          </Btn1>
        </Section1Content>
      </Section1>
      <Section2>
        <img src={illustation} alt='illustation' />
      </Section2>
    </HeroSection>
  );
};

export default Hero;
