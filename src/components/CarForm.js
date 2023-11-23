import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../validators";
import {carService} from "../services";
import {carsActions} from "../redux";


const CarForm = () => {

    const dispatch = useDispatch();
    const {trigger, car} = useSelector(state => state.cars)


    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    })

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand, {shouldValidate: true})
            setValue('price', car.price, {shouldValidate: true})
            setValue('year', car.year, {shouldValidate: true})
        }
    }, [car, setValue])

    const save = async (car) => {
        await carService.create(car);
        dispatch(carsActions.setTrigger({trigger: !trigger}))
        reset();
    }
    const update = async (car) => {
        await carService.updateById(car.id, car)
        dispatch(carsActions.setTrigger())
        dispatch(carsActions.setUpdate(null))
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(car ? update : save)}>
                <input type="text" placeholder={'brand'} {...register("brand")}/>
                <input type="text" placeholder={'price'} {...register("price", {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register("year", {valueAsNumber: true})}/>
                <button disabled={!isValid}>{car ? 'update' : 'save'}</button>

            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>

    );
};

export {CarForm};