const baseURL ='https://rickandmortyapi.com/api'

const episode = '/episode';
const character = '/character';

const urls = {
    episode: episode,
    character:character,
    biId:(id)=> `${episode}/${id}`,
    characterByIdArr:(id)=> `${character}/+${id}`
}

export {
    urls,
    baseURL
}