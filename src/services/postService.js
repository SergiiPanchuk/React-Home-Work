import {axiosServicePost} from "./axiosService";
import {basePostsURL, urlsPosts} from "../constants";

const postService = {
    getPosts: () => axiosServicePost.get(`${basePostsURL}${urlsPosts.posts.base}`),
    getComments: () => axiosServicePost.get(`${basePostsURL}${urlsPosts.posts.comments}`)
}

export {
    postService
}