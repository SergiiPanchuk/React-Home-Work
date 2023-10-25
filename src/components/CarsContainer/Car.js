import {carService} from "../../services/carServices";

const Car = ({car, setTrigger, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const update = () =>{
        setCarForUpdate(car)
    }

    const del = async () => {
        await carService.deteleById(car.id);
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={update}>update</button>
            <button onClick={del}>delete</button>
        </div>
    );
};

export {Car};