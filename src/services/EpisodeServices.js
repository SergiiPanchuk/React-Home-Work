import {axiosService} from "./axiosService";

import {urls} from "../constants";


const episodeServices = {
    getEpisode: (page='1') => axiosService.get(urls.episode, {params:{page}}),
    getByCharacterId: (id)=> axiosService.get(urls.characterByIdArr(id))
}

export {
    episodeServices
}