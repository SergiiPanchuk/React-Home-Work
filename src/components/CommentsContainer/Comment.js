import {PostOfComment} from "./PostOfComment";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";

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
        <div>
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