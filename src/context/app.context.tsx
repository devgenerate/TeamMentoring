import { ReactNode, createContext, useContext } from 'react';

import { IUserRepository, User } from '@/types';

import { useAppState } from '@/hooks/useAppState';

export interface IAppContext {
    users: User[];
    onLoadUsers: () => Promise<void>;
    focusedUser: User | null;
    onChangeFocusedUser: (userId: number) => void;
}

const AppContext = createContext<IAppContext>({} as IAppContext)

interface IAppContextProviderProps {
    children: ReactNode
    userRepository: IUserRepository
}

export function AppContextProvider({ children, userRepository }: IAppContextProviderProps) {
    const value = useAppState({ userRepository })

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)
