import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars.base)
}

export {
    carService
}