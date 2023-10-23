import {axiosServices} from "./axiosServices";

const saveComment = (comment) => axiosServices.post('', {data: comment});

export {
    saveComment
}