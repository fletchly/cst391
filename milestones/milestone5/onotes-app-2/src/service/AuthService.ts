import {isAxiosError} from "axios";
import api from "./ApiService.ts";

export const doLogin = async (username: string, password: string)=> {
    try {
        const response = await api.post('/auth/login', {
            username: username,
            password: password
        });

        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.status == 401)
        {
            return null
        }
        throw error;
    }
}