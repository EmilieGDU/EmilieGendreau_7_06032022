// Data Service for Users

import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api";

class UserService {

    getHomePage() {
        return axios
            .get(API_URL);
    }
    
    // ###########################################
    // getUserName(userId) {
    //     return axios
    //         .get(
    //             `${API_URL}/users/${userId}`, 
    //             { headers: authHeader() }
    //         );
    // }
    // ###########################################

    getUserPosts(userId) {
        return axios
            .get(
                `${API_URL}/users/${userId}/posts`, 
                { 
                    headers: authHeader()
                }
            );
    }

    getUserComments(userId) {
        return axios
            .get(
                `${API_URL}/users/${userId}/comments`, 
                { 
                    headers: authHeader() 
                }
            );
    }

    getUserCommentedPosts(userId) {
        return axios
            .get(
                `${API_URL}/users/${userId}/commentedPosts`, 
                { 
                    headers: authHeader() 
                }
            );
    }

}

export default new UserService();