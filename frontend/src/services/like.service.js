// Data Service for Likes

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class LikeService {

    getUserLikes(postId, userId) {
        return axios
            .get(
                `${API_URL}/${postId}/likes/${userId}`,
                { 
                    headers: authHeader() 
                }
            );
    }
    
    getPostLikes(postId) {
        return axios
            .get(
                `${API_URL}/${postId}/likes`,
                { 
                    headers: authHeader() 
                }
            );
    }

    likePost(postId, userId) {
        return axios
            .post(
                `${API_URL}/${postId}/likes/${userId}`,                
                null,
                { 
                    headers: authHeader() 
                }
            );
    }    

}

export default new LikeService();