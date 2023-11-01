import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../components/PostsContainer/PostDetails";
import {commentsServices} from "../services/commentsServices";
import {Comments} from "../components/CommentsContainer/Comments";
const PostDetailsPage = () => {

    const {data} = useLoaderData();
    const {id}=data;

    const [comments, setComments] = useState(null);

    useEffect( ()=>{
          commentsServices.getCommentsByPostId(id).then(({data})=>setComments(data))
    },[id])

    return (
        <div>
            <PostDetails post={data}/>
            {comments && <Comments comments={comments}/>}
        </div>
    );
};

export {PostDetailsPage};