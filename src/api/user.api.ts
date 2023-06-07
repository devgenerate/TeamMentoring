import { IUserRepository, User } from '@/types';

export class UserRepository implements IUserRepository {
    private readonly BASE_URL = 'https://gorest.co.in/public/v2/users'

    public async load() {
        const usersResponse = await fetch(this.BASE_URL)
        const users: User[] = await usersResponse.json()
        return { result: users }
    }

    public async getDetails(userId: number) {
        const usersResponse = await fetch(`${this.BASE_URL}/${userId}`)
        const user: User = await usersResponse.json()
        return { result: user }
    }
}
