import {useEffect, useState} from "react";

import {PostOfComment} from "./PostOfComment";
import {commentService} from "../../services/commentService";
import css from "./Comments.module.css"

const Comment = ({comment}) => {
    const {body, email, id, name, postId} = comment;

    const [trigger, setTrigger] = useState(false);

    const [post, setPost] = useState([])

    const click = () => {
        setTrigger(!trigger)
    }

    useEffect(() => {
        commentService.getPostOfComment(postId).then(({data}) => setPost(data))
    }, [trigger])

    return (
        <div className={css.Comment}>
            <div>body:{body}</div>
            <div>email:{email}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>postId:{postId}</div>
            <button onClick={click}>Post</button>
            {trigger && <PostOfComment post={post}/>}
        </div>
    );
};

export {Comment};