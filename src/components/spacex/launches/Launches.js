import {useEffect, useState} from "react";

import {axiosServiceLaunches} from "../../constants/services/axiosService";
import {baseURLLaunches} from "../../constants/urls";
import {Launche} from "../launche/Launche";
import css from "./Launches.module.css"


const Launches = () => {

    const [launches, setLaunches]= useState([]);

    useEffect(()=> {
        axiosServiceLaunches.get(baseURLLaunches).then(({data})=>setLaunches(data))
    })
    return (
        <div className={css.Launches}>
            {launches && (launches.filter(launch => parseInt(launch.launch_year) <= 2019)).map(value =>
                <Launche key={value.flight_number} mission={value.mission_name} launch={value.launch_year} image={value.links.mission_patch_small}/>
            )}
        </div>
    );
};

export {Launches};