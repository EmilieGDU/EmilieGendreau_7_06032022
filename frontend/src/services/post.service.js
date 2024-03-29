// Data Service for Posts

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class PostService {

    createPost(newPost) {
        return axios
            .post(
                API_URL,
                newPost, 
                { 
                    headers: authHeader() 
                }
            );
    }

    getAllPosts() {
        return axios
            .get(
                API_URL, 
                { 
                    headers: authHeader() 
                }
            );
    }

    modifyPost(postId, updatedPost) {
        return axios
            .put(
                `${API_URL}/${postId}`,
                updatedPost, 
                { 
                    headers: authHeader() 
                }
            );
    }

    deletePost(postId) {
        return axios
            .delete(
                `${API_URL}/${postId}`,
                { 
                    headers: authHeader() 
                }
            );
    }

}

export default new PostService();