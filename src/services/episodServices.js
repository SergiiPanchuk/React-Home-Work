import {axiosServices} from "./axiosServices";
import {urls} from "../constants";


const episodeServices = {
    getEpisode: (page='1') => axiosServices.get(urls.episode, {params:{page}}),
    getById:(id)=> axiosServices.get(urls.biId(id)),
    character: () => axiosServices.get(urls.character),
    getByCharacterId: (id)=> axiosServices.get(urls.characterByIdArr(id))
}

export {
    episodeServices
}