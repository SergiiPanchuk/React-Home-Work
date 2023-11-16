import {axiosService} from "./axiosService";
import {urls} from "../constants";


const episodeServices = {
    getEpisode: (page='1') => axiosService.get(urls.episode, {params:{page}}),
    getById:(id)=> axiosService.get(urls.biId(id)),
    character: () => axiosService.get(urls.character),
    getByCharacterId: (id)=> axiosService.get(urls.characterByIdArr(id))
}

export {
    episodeServices
}