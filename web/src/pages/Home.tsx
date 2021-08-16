import React, { useState, useEffect, memo } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

import { api } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import User from '../types/User';
import Tag from '../types/Tag';
import Compliment from '../types/Compliment';

import Modal, { ModalHandles } from '../components/Modal';
import { Compliments } from '../components/Compliments';
import { Coworkers } from '../components/Coworkers';
import { SelectReceiver } from '../components/SelectReceiver';
import { CreateCompliment } from '../components/CreateCompliment';
import { Main } from '../styles/home';
import { CallToCompliment } from '../components/CallToCompliment';
import { ElapsedTimeByCreationDate } from '../utils/ElapsedTime';

const MemoizedCallToCompliment = memo(CallToCompliment);
const MemoizedCompliments = memo(Compliments);
const MemoizedCoworkers = memo(Coworkers);
const MemoizedModal = memo(Modal);

const Home: React.FC = () => {
  document.title = 'Valoriza';

  const { authentication, userToken, currentUserId } = useAuth();

  const [coworkers, setCoworkers] = useState<User[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [compliments, setCompliments] = useState<Compliment[]>([]);

  const [currentReceiver, setCurrentReceiver] = useState({} as User);

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

        setCoworkers(users.filter((user: User) => user.id !== currentUserId));
        setTags(tags);
        setCompliments(compliments);
      } catch (error) {
        console.log(error);
      }
    }

    if (userToken) {
      getData();
    }
  }, [authentication, userToken, currentUserId]);

  const [modalContent, setModalContent] = useState('');
  const modalRef = useRef<ModalHandles>(null);

  const openModal = useCallback(() => modalRef.current?.openModal(), []);
  const closeModal = useCallback(() => modalRef.current?.closeModal(), []);
  const switchModalContent = () => {
    switch (modalContent) {
      case 'selectReceiver':
        return (
          <SelectReceiver
            receivers={coworkers}
            setCurrentReceiver={setCurrentReceiver}
            setModalContent={setModalContent}
          />
        );
      case 'createCompliment':
        return (
          <CreateCompliment
            tags={tags}
            currentReceiver={currentReceiver}
            closeModal={closeModal}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <MemoizedCallToCompliment
        openModal={openModal}
        setModalContent={setModalContent}
      />
      <Main>
        <MemoizedCompliments compliments={compliments} />
        <aside>
          <MemoizedCoworkers
            coworkers={coworkers}
            openModal={openModal}
            setCurrentReceiver={setCurrentReceiver}
            setModalContent={setModalContent}
          />
        </aside>
      </Main>
      <MemoizedModal ref={modalRef} children={switchModalContent()} />)
    </>
  );
};

export default Home;
