import { Dispatch, SetStateAction, useState } from 'react';
import { createContext, ReactNode } from 'react';

type AuthContextType = {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<string | null>>;
  currentUserId: string | null;
  setCurrentUserId: Dispatch<SetStateAction<string | null>>;
  authentication: { Authorization: string };
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const localUser = localStorage.getItem('currentUser');

  const [userToken, setUserToken] = useState(
    localUser ? JSON.parse(localUser).token : null
  );
  const [currentUserId, setCurrentUserId] = useState(
    localUser ? JSON.parse(localUser).id : null
  );

  const authentication = { Authorization: `Bearer ${userToken}` };

  const createdAt = localUser ? JSON.parse(localUser).created_at : undefined;
  const expired = Date.now() - createdAt > 24 * 60 * 60 * 1000;

  if (createdAt && expired) {
    console.log((Date.now() - createdAt) / 1000);
    console.log(expired);
    localStorage.removeItem('currentUser');
  }
  return (
    <AuthContext.Provider
      value={{
        userToken,
        setUserToken,
        currentUserId,
        setCurrentUserId,
        authentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
