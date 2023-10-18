import {useEffect, useState} from "react";
import axios from "axios";

import {Post} from "../Post/Post";
import css from "./Posts.module.css"
import {PostInfo} from "../PostInfo/PostInfo";
import {postService} from "../constants/services/postService";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postInfo, setPostInfo] = useState(null)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(value => setPosts(value));

        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    const click = async (id) => {
        // await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        //    .then(value => value.json())
        //    .then(value => setPostInfo(value))
        const info = await postService.getById(id);
        setPostInfo(info.data)
    }

    return (
        <div>
            <div className={css.postsBlock}>
                {posts.map(value => <Post key={value.id} title={value.title} id={value.id} click={click}/>)}
            </div>

            {postInfo && <PostInfo postInfo={postInfo}/>}

        </div>
    );
};

export {Posts};