import axios, {AxiosInstance} from "axios";

export const clientRequest: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Accept": "application/json"
    }
});