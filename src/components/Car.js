import {useDispatch, useSelector} from "react-redux";

import {triggerAction} from "../redux";
import {carService} from "../services";
import {forUpdateAction} from "../redux/slices/forUpdateSlice";

const Car = ({car}) => {
    const {brand, price, year} = car;
    const dispatch = useDispatch();
    const {trigger} = useSelector(state => state.trigger);


    const deleteById = async () => {
        await carService.deteleById(car.id);
        dispatch(triggerAction.setTrigger({trigger: !trigger}))
    }

    const update = () =>{
       dispatch(forUpdateAction.setUpdate({car:car}))
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