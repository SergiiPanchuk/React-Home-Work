import {axiosServices} from "./axiosServices";

const saveUser = (user) => axiosServices.post('',{data:user});

export {
    saveUser
}