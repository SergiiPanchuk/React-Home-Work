import axios from "axios";

import {baseURL} from "../urls";

import {baseURLLaunches} from "../urls";

const axiosServiceLaunches = axios.create({baseURLLaunches});

const axiosService= axios.create({baseURL})

export {
    axiosService,
    axiosServiceLaunches
}