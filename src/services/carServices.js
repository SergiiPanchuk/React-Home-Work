import {axiosServices} from "./axiosServices";

import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosServices.get(urls.cars.base),
    create: (data) => axiosServices.post(urls.cars.base, data),
    updateById: (id,data)=> axiosServices.put(urls.cars.byId(id), data),
    deteleById:(id)=> axiosServices.delete(urls.cars.byId(id))
}

export {
    carService
}