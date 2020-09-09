import axios from 'axios';

const AUTH_URL = "http://localhost:8080";

axios.defaults.baseURL = AUTH_URL;

export default class AuthService {
    static signup(newUser) {
        axios.post("/api/auth/register", newUser)
            .then(response => {
                if (response.status !== 200) {
                    console.log(response.data.message);
                }
                else {
                    console.log(response.status + " User registered.")
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    static signin(user) {
        return axios.post("/api/auth/login", user)
            .then(response => {
                if (response.data.accessToken !== null) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    static signout() {
        localStorage.removeItem("user");
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }

    static checkAuthStatus() {
        if (JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).accessToken !== null) {
            return true;
        }
        else {
            return false;
        }
    }
}