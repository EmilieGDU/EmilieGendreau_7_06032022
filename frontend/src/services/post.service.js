// Data Service

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/posts";

class PostService {

    getAllPosts() {
        return axios
            .get(API_URL, { headers: authHeader() });
    }

};

export default new PostService();