// Data Service for Comments

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts";

class CommentService {

    createComment() {
    }

    getPostComments(postId) {
        return axios
            .get(`${API_URL}/${postId}/comments`,
            { headers: authHeader() });
    }

    // getOneComment(postId, commentId) {
    //     return axios
    //         .get(`${API_URL}/${postId}/comments/${commentId}`,
    //         { headers: authHeader() });
    // }

    modifyComment() {

    }

    deleteComment() {

    }

}

export default new CommentService();