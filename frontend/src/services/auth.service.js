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
            )
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };
    
    logout() {
        localStorage.removeItem("user");
    };
    
    signup(user) {
        return axios
            .post(
                `${API_URL}/signup`, 
                {
                    email: user.email,
                    password: user.password
                }
            );
    };
};

export default new AuthService();