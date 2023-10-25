import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/carServices";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate}) => {



    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const save = async (car) => {
        await carService.create(car);
        setTrigger(prev => !prev);
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register("brand")}/>
                <input type="text" placeholder={'price'} {...register("price", {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register("year", {valueAsNumber: true})}/>
                <button disabled={!isValid}>save</button>

            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>

    );
};

export {CarForm};