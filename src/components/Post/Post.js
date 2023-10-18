import css from "./Post.module.css"

const Post = ({id, title, click}) => {


    return (
        <div className={css.postBlock}>
            <h4>{id}</h4>
            <p>{title}</p>
            <button onClick={() => click(id)}>info</button>
        </div>
    );
};

export {Post};