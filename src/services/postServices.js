import {axiosServices} from "./axiosServices";

const savePost = (post) => axiosServices.post('',{data:post});

export {
    savePost
}