import {axiosServices} from "./axiosServices";

import {urls} from "../constants/urls";

const postService = {
    getByUserId: (id) => axiosServices.get(urls.posts.byUserId(id)),
    getById: (id) => axiosServices.get(urls.posts.byPostId(id)),
};

export {
    postService
}