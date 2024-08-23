import axios from "axios";
import {AxiosResponse} from "axios";
import {clearToken, getToken} from "./auth";
import router from "@/router";

const http = axios.create();
http.interceptors.request.use(
    (config) => {
        config.headers.token = getToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    async (response: AxiosResponse) => {
        const res = response.data;
        if (response.config.responseType === "blob") {
            // 如果是文件流，直接过
            return response;
        } else if (res.code !== 200) {
            if (res.code === 401) {
                clearToken();
            }
            if (res.code === 405) {
                clearToken();
                router.push("/login")
            }
            if (res.code === 403) {
                clearToken();
                router.push("/login");
            }
            if (res.message) {
                console.log(res.message);
            }
        }
        return res;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default http;
