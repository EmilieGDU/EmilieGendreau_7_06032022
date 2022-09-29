// Helper function for accessing protected data.
// In this case, the HTTP request needs an Authorization header.

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
        // For Node.js Express backend, we use "x-access-token" header
        // return { "x-access-token": user.token };
        return { Authorization: `Bearer ${user.token}` };
    }
    else {
        return {};
    }
}