import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 4Zuxfm8AWIsfr4BIPCaVc6u9m6HG2aP14z_TgjX03nA",
    },
});
