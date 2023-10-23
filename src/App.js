import {useForm} from "react-hook-form";
import {savePost} from "./services/postServices";

const App = () => {

    const {register,handleSubmit}=useForm()

    const create = (data) => {
        savePost(data).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input {...register("title")}/>
                <input {...register("body")}/>
                <input {...register("userId")}/>
                <button>create</button>
            </form>
        </div>
    );
};

export {App};