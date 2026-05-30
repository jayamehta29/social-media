import axios from 'axios';
export async function getPostData() {
    const resp = await axios.get('https://dummyjson.com/posts'); 
    return resp.data;
}

export async function getUsersData() {
    const resp = await axios.get('https://dummyjson.com/users');   
    return resp.data;
}


// apis
// https://dummyjson.com/posts
// https://fastly.picsum.photos/id/0/height/width
// https://dummyjson.com/users