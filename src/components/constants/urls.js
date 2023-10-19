const baseURL = 'https://jsonplaceholder.typicode.com';
const baseURLLaunches = 'https://api.spacexdata.com/v3/launches';

const posts = '/posts';

const urls = {
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,
    urls,
    baseURLLaunches
}