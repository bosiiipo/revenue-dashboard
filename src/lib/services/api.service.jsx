import axios from "axios";
import { config } from "../../config";

const createApi = () => {
    const api = axios.create({
        baseURL: config.apiUrl,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return api;
};

export const api = createApi();
