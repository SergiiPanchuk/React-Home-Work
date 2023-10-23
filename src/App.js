import {useForm} from "react-hook-form";

import {saveComment} from "./services/commentServices";


const App = () => {

    const {register, handleSubmit} = useForm()

    const create = (data) => {
        saveComment(data).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input  {...register("postId")} placeholder="postId"/>
                <input {...register("name")} placeholder="name"/>
                <input {...register("email")} placeholder="email"/>
                <input {...register("body")} placeholder="body"/>
                <button>create</button>
            </form>
        </div>
    );
};

export {App};