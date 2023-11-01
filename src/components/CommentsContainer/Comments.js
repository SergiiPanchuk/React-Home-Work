import {Comment} from "./Comment";
import css from "./Comments.module.css"
const Comments = ({comments}) => {

    console.log(comments);
    return (
        <div className={css.Comments}>
            {comments.map((comment)=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};