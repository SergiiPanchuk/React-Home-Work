import {useDispatch, useSelector} from "react-redux";

import {carsActions} from "../redux";
import {carService} from "../services";

const Car = ({car}) => {
    const {brand, price, year} = car;
    const dispatch = useDispatch();
    const {trigger} = useSelector(state => state.trigger);


    const deleteById = async () => {
        await carService.deteleById(car.id);
        dispatch(carsActions.setTrigger({trigger: !trigger}))
    }

    const update = () => {
        dispatch(carsActions.setUpdate({car: car}))
    }

    return (
        <div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={deleteById}>Delete</button>
            <button onClick={update}>update</button>
        </div>
    );
}

export {Car};