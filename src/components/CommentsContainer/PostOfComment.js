import css from "./PostOfComment.module.css"

const PostOfComment = ({post}) => {

    const {body, id, title, userId} = post;
    return (
        <div className={css.Post}>
            <div>body:{body}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>userId:{userId}</div>
        </div>
    );
};

export {PostOfComment};