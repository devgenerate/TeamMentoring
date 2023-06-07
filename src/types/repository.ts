import { CustomResponseData } from './api.types';
import { User } from './user.types';

export interface IUserRepository {
    load: () => Promise<CustomResponseData<User[]>>;
    getDetails: (userId: number) => Promise<CustomResponseData<User>>;
}