import axios from './axios';
import * as config from './../config/api';

export interface IChatsService {
    getConversationList(): Promise<any[]>;
    getChat(conversationId: number): Promise<any>;
}

export class ChatsService implements IChatsService {
    async getConversationList(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/conversation`
            );
            //   console.log(response.data)]
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async getChat(conversationId: number): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/conversation/${conversationId}`
            );
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}
export default new ChatsService();
