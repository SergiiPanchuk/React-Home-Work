import axios from "axios";

import {basePostsURL, baseURL} from "../constants";

const axiosService = axios.create({baseURL});
const axiosServicePost = axios.create({basePostsURL})

export {
    axiosService,
    axiosServicePost
}