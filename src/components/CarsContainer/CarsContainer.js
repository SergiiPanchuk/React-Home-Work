import {useEffect, useState} from "react";

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carServices";

const CarsContainer = () => {

    const [cars,setCars] = useState([])
    const [trigger,setTrigger] =useState(null)
    const [carForUpdate,setCarForUpdate]=useState([])

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    },[trigger])



    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};