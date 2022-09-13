// Data Service for Likes

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class LikeService {

    getPostLikes(postId) {
        return axios
            .get(`${API_URL}/${postId}/likes`,
            { headers: authHeader() });
    }

    likePost() {
    }
    
    unlikePost() {
    }

}

export default new LikeService();