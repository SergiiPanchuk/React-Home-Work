const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos';
const albums = '/albums'
const comments = '/comments'
const post='/posts'

const urls = {
    todos,
    albums,
    post :{
        postById:(id)=>`${post}/${id}`
    },
    comments:{
        base:comments,
    }
}

export {
    baseURL,
    urls
}