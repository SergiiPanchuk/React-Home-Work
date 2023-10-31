import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const userService= {
    getAll: () => axiosServices.get(urls.users.base),
    getById: (id) => axiosServices.get(urls.users.byId(id))
}

export {
    userService
}