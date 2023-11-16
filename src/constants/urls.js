const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode';
const character = '/character';

const urls = {
    episode: episode,
    characterByIdArr: (id) => `${character}/+${id}`
}

export {
    urls,
    baseURL
}