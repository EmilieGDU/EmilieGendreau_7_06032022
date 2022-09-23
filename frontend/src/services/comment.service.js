// Data Service for Comments

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class CommentService {

    createComment(comment) {
        return axios
            .post(
                `${API_URL}/${comment.PostId}/comments`, 
                comment,
                { 
                    headers: authHeader() 
                }
            );
    }

    getPostComments(postId) {
        return axios
            .get(
                `${API_URL}/${postId}/comments`,
                { 
                    headers: authHeader() 
                }
            );
    }

    // getOneComment(postId, commentId) {
    //     return axios
    //         .get(`${API_URL}/posts/${postId}/comments/${commentId}`,
    //         { headers: authHeader() });
    // }

    modifyComment(postId, commentId) {
        return axios
            .put(
                `${API_URL}/${postId}/comments/${commentId}`, 
                { 
                    headers: authHeader() 
                }
            );
    }

    deleteComment(comment) {        
        return axios
            .delete(
                `${API_URL}/${comment.postId}/comments/${comment.commentId}`, 
                { 
                    headers: authHeader() 
                }
            );
    }

}

export default new CommentService();