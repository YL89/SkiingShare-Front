export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.accessToken) {
        return { "Authentication": "JWT " + user.accessToken };
    }
    else {
        return {};
    }
}