import axios from "axios";

import {baseURL} from "../constants/urls";

const axiosServices = axios.create({baseURL, headers: {'Content-type': 'application/json; charset=UTF-8'}})

export {
    axiosServices
}