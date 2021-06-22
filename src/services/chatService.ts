import axios from './axios';
import * as config from './../config/api';
import { Message } from '../pages/chat/Chat';

export interface IChatsService {
    getConversationList(): Promise<any[]>;
    getChat(conversationId: string): Promise<Message[]>;
}

export class ChatsService implements IChatsService {
    async getConversationList(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/conversation`
            );
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async getChat(conversationId: string): Promise<Message[]> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/conversation/${conversationId}`
            );
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}
export default new ChatsService();
