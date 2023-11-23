
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CarForm, Cars} from "../components";
import {carService} from "../services";
import {carsActions} from "../redux";

const CarPage = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);



    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setResponse({cars: data})))
    }, [trigger, dispatch])

    return (
        <div>
            <CarForm/>
            <Cars cars={cars}/>
        </div>
    );
}

export {CarPage};