// Authentication service

import axios from 'axios';

const API_URL = "http://localhost:3000/api/auth";

class AuthService {
    
    login(user) {
        return axios
            .post(
                `${API_URL}/login`, 
                {
                    email: user.email,
                    password: user.password
                }
            );
    }
    
    signup(user) {
        return axios
            .post(
                `${API_URL}/signup`, 
                {
                    email: user.email,
                    password: user.password
                }
            );
    }
}

export default new AuthService();