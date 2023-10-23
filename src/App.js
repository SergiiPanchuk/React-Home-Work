import {useForm} from "react-hook-form";

import {saveUser} from "./services/userServices";

const App = () => {

    const {register,handleSubmit}=useForm()

    const create = (data) => {
        saveUser(data).then(({data}) => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input {...register("name")} placeholder={'name'}/>
                <input {...register("username")} placeholder={'username'}/>
                <input {...register("email")} placeholder={'email'}/>
                <input {...register('address.street')} placeholder={'street'}/>
                <input {...register('address.suite')} placeholder={'suite'}/>
                <input {...register("address.city")} placeholder={'city'}/>
                <input {...register("address.zipcode")} placeholder={'zipcode'}/>
                <input {...register("address.geo.lat")} placeholder={'geo.lat'}/>
                <input {...register("address.geo.lng")} placeholder={'geo.lng'}/>
                <input {...register("phone")} placeholder={'phone'}/>
                <input {...register("website")} placeholder={'website'}/>
                <input {...register("company.name")} placeholder={'company.name'}/>
                <input {...register("company.catchPhrase")} placeholder={'company.catchPhrase'}/>
                <input {...register("company.bs")} placeholder={'company.bs'}/>
                <button>create</button>
            </form>
        </div>
    );
};

export {App};