import {Comment} from "./Comment";

const Comments = ({comments}) => {

    console.log(comments);
    return (
        <div>
            {comments.map((comment)=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};