import {axiosServices} from "./axiosServices";

import {urls} from "../constants/urls";

const commentsServices= {
    getCommentsByPostId: (id)=>axiosServices.get(urls.posts.commentsByIs(id))}

export {
    commentsServices
}