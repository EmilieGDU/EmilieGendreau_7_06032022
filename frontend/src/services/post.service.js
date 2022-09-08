// Data Service for Posts

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class PostService {

    createPost() {
    }

    getAllPosts() {
        return axios
            .get(API_URL, { headers: authHeader() });
    }

    getOnePost() {

    }

    getUserPosts() {
        return axios
            .get(API_URL, { headers: authHeader() });
    }

    modifyPost() {

    }

    deletePost() {

    }

}

export default new PostService();