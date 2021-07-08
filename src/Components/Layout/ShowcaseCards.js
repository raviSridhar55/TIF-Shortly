import React from 'react';
import {
  Card,
  ShowcaseContainer,
  Line,
  Badge,
  Content,
} from '../style/ShowcaseStyle';
import { Container } from '../style/MainStyle';
import IconBR from '../../Assets/icon-brand-recognition.svg';
import IconDR from '../../Assets/icon-detailed-records.svg';
import IconFC from '../../Assets/icon-fully-customizable.svg';

const ShowcaseCards = () => {
  return (
    <Container>
      <ShowcaseContainer>
        <Card>
          <Badge>
            <img src={IconBR} alt='IconBR' />
          </Badge>
          <Content>
            <h2>Brand Recognization</h2>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence .{' '}
            </p>
          </Content>
        </Card>
        <Card>
          <Badge>
            <img src={IconDR} alt='IconDR' />
          </Badge>
          <Content>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.{' '}
            </p>
          </Content>
        </Card>
        <Card>
          <Badge>
            <img src={IconFC} alt='IconFC' />
          </Badge>
          <Content>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement..{' '}
            </p>
          </Content>
        </Card>
        <Line></Line>
      </ShowcaseContainer>
    </Container>
  );
};

export default ShowcaseCards;
