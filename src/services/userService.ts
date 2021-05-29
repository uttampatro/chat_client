/* eslint-disable */
import axios from './axios';
import { SaveUserDTO } from '../pages/login/dtos/saveUser';

export interface IUsersService {
    saveUser(gitHubAuthURL: string): Promise<any>;
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

    async saveUser(gitHubAuthURL: string): Promise<any> {
        try {
            //step1: authenticate with github auth url
            const authResponse = await axios.get(gitHubAuthURL, {
                withCredentials: true,
            });
            const githubUser: any = authResponse.data;

            //ste2: save response of github user in our db
            const response = await axios.post('/user', {
                githubId: githubUser.id,
                email: githubUser.email,
            });

            //step3: save user in localStorage
            localStorage.setItem('user', JSON.stringify(githubUser));

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new UsersService();
