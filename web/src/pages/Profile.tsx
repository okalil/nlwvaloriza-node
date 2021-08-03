import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';
import { ElapsedTimeByCreationDate } from '../utils/ElapsedTime';
import Compliment from '../types/Compliment';
import ComplimentObject from '../types/ComplimentDataObject';
import profileImg from '../assets/profile.svg';

import { Header } from '../components/Header';
import { Compliments } from '../components/Compliments';
import { Box } from '../components/Box';
import {
  MainContainer,
  ProfileSection,
  RecognitionsContainer,
  SectionHeader,
  Status,
  Subtitle,
  Username,
} from '../styles/profile';

const Profile: React.FC = () => {
  document.title = `Kalil | Valoriza`;

  const { authentication } = useAuth();

  const [sentCompliments, setSentCompliments] = useState<Compliment[]>([]);
  const [receivedCompliments, setReceivedCompliments] = useState<Compliment[]>(
    []
  );

  useEffect(() => {
    async function getData() {
      try {
        const auth = { headers: authentication };

        const receiveRequest = api.get('/users/compliments/receive', auth);
        const sendRequest = api.get('/users/compliments/send', auth);

        const [receiveResponse, sendResponse] = await Promise.all([
          receiveRequest,
          sendRequest,
        ]);

        const receivedCompliments = receiveResponse.data
          .reverse()
          .slice(0, 5)
          .map((item: ComplimentObject) => {
            return {
              id: item.id,
              userReceiver: item.userReceiver.name,
              userSender: item.userSender.name,
              tag: item.tag.name,
              message: item.message,
              elapsedTime: ElapsedTimeByCreationDate(
                new Date(item.created_at).getTime()
              ),
            };
          });

        const sentCompliments = sendResponse.data
          .reverse()
          .slice(0, 5)
          .map((item: ComplimentObject) => {
            return {
              id: item.id,
              userReceiver: item.userReceiver.name,
              userSender: item.userSender.name,
              tag: item.tag.name,
              message: item.message,
              elapsedTime: ElapsedTimeByCreationDate(
                new Date(item.created_at).getTime()
              ),
            };
          });

        setReceivedCompliments(receivedCompliments);
        setSentCompliments(sentCompliments);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [authentication]);

  const [currentFocus, setFocus] = useState<'received' | 'sent'>('received');
  const focusReceived = currentFocus === 'received';
  const focusSent = currentFocus === 'sent';
  const focusStyle = { background: '#823acf' };
  const noFocusStyle = {
    cursor: 'pointer',
    boxShadow: '0 0 1px 1px #fff',
    zIndex: 1,
  };

  // se tiver foco =>
  //     case empty data => box
  //     case data => list

  return (
    <>
      <Header />
      <MainContainer>
        <ProfileSection>
          <SectionHeader>
            <img src={profileImg} alt="Eu" />
            <Status>
              <Username>Kalil</Username>
              <span>
                <strong>
                  {receivedCompliments.length + sentCompliments.length}{' '}
                </strong>
                reconhecimentos
              </span>
              <div>
                <span>
                  <strong>{receivedCompliments.length} </strong>recebidos
                </span>
                <span>
                  <strong>{sentCompliments.length} </strong>enviados
                </span>
              </div>
            </Status>
          </SectionHeader>
          <h2>Reconhecimentos</h2>
          <RecognitionsContainer>
            <Subtitle
              style={focusReceived ? focusStyle : noFocusStyle}
              onClick={() => setFocus('received')}
            >
              Recebidos
            </Subtitle>
            <Subtitle
              style={focusSent ? focusStyle : noFocusStyle}
              onClick={() => setFocus('sent')}
            >
              Enviados
            </Subtitle>
            {focusReceived &&
              (receivedCompliments.length ? (
                <Compliments compliments={receivedCompliments} />
              ) : (
                <Box>
                  <h2>Você ainda não recebeu nenhum reconhecimento.</h2>
                </Box>
              ))}

            {focusSent &&
              (sentCompliments.length ? (
                <Compliments compliments={sentCompliments} />
              ) : (
                <Box>
                  <h2>Você ainda não recebeu enviou reconhecimento.</h2>
                </Box>
              ))}
          </RecognitionsContainer>
        </ProfileSection>
      </MainContainer>
    </>
  );
};

export default Profile;
