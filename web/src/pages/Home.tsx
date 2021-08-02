import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import User from '../types/User';
import Tag from '../types/Tag';
import Compliment from '../types/Compliment';

import { Header } from '../components/Header';
import { Compliments } from '../components/Compliments';
import { Coworkers } from '../components/Coworkers';
import { Modal } from '../components/Modal';
import { SelectReceiver } from '../components/SelectReceiver';
import { CreateCompliment } from '../components/CreateCompliment';
import { Main } from '../styles/home';
import { CallToCompliment } from '../components/CallToCompliment';
import { ElapsedTimeByCreationDate } from '../utils/ElapsedTime';

type ModalContent = 'selectReceiver' | 'createCompliment';

const Home: React.FC = () => {
  document.title = 'Valoriza';

  const { authentication, userToken, currentUserId } = useAuth();

  const [isModalOpen, setModalState] = useState(false);
  const [modalContent, setModalContent] =
    useState<ModalContent>('selectReceiver');

  const [users, setUsers] = useState<User[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [compliments, setCompliments] = useState<Compliment[]>([]);

  const [currentReceiver, setCurrentReceiver] = useState({} as User);

  useEffect(() => {
    if (!isModalOpen) {
      setModalContent('selectReceiver');
    }
  }, [isModalOpen]);

  useEffect(() => {
    async function getData() {
      const auth = {
        headers: authentication,
      };

      try {
        const usersRequest = api.get('/users', auth);
        const tagsRequest = api.get('/tags', auth);
        const complimentsRequest = api.get('/compliments', auth);

        const [usersResponse, tagsResponse, complimentsResponse] =
          await Promise.all([usersRequest, tagsRequest, complimentsRequest]);

        const users = usersResponse.data.map((item: User) => {
          return { name: item.name, id: item.id };
        });
        const tags = tagsResponse.data.map((item: Tag) => {
          return { name: item.name, id: item.id };
        });
        const compliments = complimentsResponse.data
          .reverse()
          .slice(0, 5)
          .map(
            (item: {
              id: string;
              userReceiver: { name: string };
              userSender: { name: string };
              message: string;
              tag: { name: string };
              created_at: number;
            }) => {
              return {
                id: item.id,
                userReceiver: item.userReceiver.name,
                userSender: item.userSender.name,
                message: item.message,
                tag: item.tag.name,
                elapsedTime: ElapsedTimeByCreationDate(
                  new Date(item.created_at).getTime()
                ),
              };
            }
          );

        setUsers(users);
        setTags(tags);
        setCompliments(compliments);
      } catch (error) {
        console.log(error);
      }
    }

    if (userToken) {
      getData();
    }
  }, [authentication, userToken]);

  const coworkers = users.filter(user => user.id !== currentUserId);

  return userToken ? (
    <>
      <Header />
      <CallToCompliment setModalState={setModalState} />

      <Main>
        <Compliments compliments={compliments} />
        <aside>
          <Coworkers
            coworkers={coworkers}
            setModalState={setModalState}
            setModalContent={setModalContent}
            setCurrentReceiver={setCurrentReceiver}
          />
        </aside>
      </Main>

      {isModalOpen && (
        <Modal setState={setModalState}>
          {modalContent === 'selectReceiver' && (
            <SelectReceiver
              receivers={coworkers}
              setCurrentReceiver={setCurrentReceiver}
              setModalContent={setModalContent}
            />
          )}
          {modalContent === 'createCompliment' && (
            <CreateCompliment
              tags={tags}
              currentReceiver={currentReceiver}
              setModalState={setModalState}
            />
          )}
        </Modal>
      )}
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default Home;
