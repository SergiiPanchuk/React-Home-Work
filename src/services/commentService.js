import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments.base),
    getPostOfComment: (postId) => axiosService.get(urls.post.postById(postId))
}

export {
    commentService
}
