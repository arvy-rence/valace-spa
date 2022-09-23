import axios from 'axios';

export default async function uploadImageToAPI(file) {
    console.log('trying to upload image to API');
    const API_URL = `https://api.imgbb.com/1/upload?&key=8d3e0ce9d59165480eab51e5bd231d50`
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.data.data.display_url;
}