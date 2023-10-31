import {Post} from "./Post";

import css from "./Post.module.css"

const Posts = ({posts}) => {

    return (
        <div className={css.Post}>
            {posts.map((post)=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};