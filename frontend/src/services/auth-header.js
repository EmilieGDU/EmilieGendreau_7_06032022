// Helper function for accessing protected data.
// In this case, the HTTP request needs an Authorization header.

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
        return { Authorization: `Bearer ${user.token}` };
    }
    else {
        return {};
    }
}