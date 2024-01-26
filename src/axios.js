/** @format */

import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:4242",
    baseURL: "https://abdu-amazon-backend.cyclic.app",
});

export default instance;
