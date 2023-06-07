import { useState } from 'react';

import { IAppContext } from '@/context';

import { IUserRepository, User } from '@/types';

interface IUseAppStateParams {
    userRepository: IUserRepository
}

export function useAppState({ userRepository }: IUseAppStateParams): IAppContext {
    const [users, setUsers] = useState<User[]>([])
    const [focusedUser, setFocusedUser] = useState<User | null>(null)

    const onLoadUsers = async () => {
        const { result } = await userRepository.load()
        setUsers(result)
    }

    const onChangeFocusedUser = (userId: number) => {
        const foundUser = users.find((user) => user.id === userId)
        setFocusedUser(foundUser || null)
    }

    return {
        users,
        onLoadUsers,
        focusedUser,
        onChangeFocusedUser,
    }
}