/* eslint-disable */
import axios from './axios';
import { SaveUserDTO } from '../pages/login/dtos/saveUser';

export interface IUsersService {
    login(email: string, password: string): Promise<any>;
    logout(): Promise<void>;
}

export class UsersService implements IUsersService {
    public async logout(): Promise<void> {
        try {
            // TODO: put axios calls here
            localStorage.clear();
        } catch (err) {
            console.log(err);
        }
    }

    async login(email: string, password: string): Promise<any> {
        try {
            //ste1: save response of github user in our db
            const response = await axios.post('http://localhost:5000/v1/login', {
                email,
                password,
            });

            //step2: save user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data));

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new UsersService();
