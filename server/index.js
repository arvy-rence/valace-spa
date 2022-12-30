import axios from "axios";

export default axios.create({
    baseURL: "https://vcl-website.herokuapp.com/api/"
//     baseURL: "http://localhost:8080/api/"
})
