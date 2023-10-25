import {Car} from "./Car";

const Cars = ({cars, setTrigger, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};