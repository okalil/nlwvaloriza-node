import React from 'react';
import Compliment from '../../types/Compliment';
import profile from '../../assets/profile.svg';
import heart from '../../assets/heart.svg';

import { Box } from '../Box';
import {
  CardHeader,
  RightContainer,
  CardBody,
  TagWrapper,
  HeartIcon,
} from './styles';
type ComplimentsProps = {
  compliments: Compliment[];
};

export const Compliments: React.FC<ComplimentsProps> = ({ compliments }) => {
  return (
    <div>
      {compliments.map(item => {
        return (
          <Box key={item.id} style={{ marginBottom: '0.75rem' }}>
            <CardHeader>
              <img src={profile} alt="receiver" />
              <RightContainer>
                <h2>{item.userReceiver}</h2>
                <img src={profile} alt="sender" />
                <span>De {item.userSender}</span>
              </RightContainer>
              <HeartIcon src={heart} alt="like" />
            </CardHeader>
            <CardBody>
              <p>{item.message}</p>
              <span>{item.elapsedTime}</span>
              <TagWrapper>
                <span>{item.tag}</span>
              </TagWrapper>
            </CardBody>
          </Box>
        );
      })}
    </div>
  );
};
