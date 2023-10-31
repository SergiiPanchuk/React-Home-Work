const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments ='/comments'

const urls = {
    users:{
        base: users,
        byId:(id)=> `${users}/${id}`
    },
    posts:{
        byUserId:(id)=> `${users}/${id}${posts}`,
        byPostId:(id)=> `${posts}/${id}`,
        commentsByIs:(id)=>`${posts}/${id}${comments}`
    },
}

export {
    baseURL,
    urls
}