// Setting
export const setLocalStorage = (userId, isAdmin, token) => {
    const user = {
        userId: userId,
        isAdmin: isAdmin,
        token: token
    };
    localStorage.setItem("user", JSON.stringify(user));
}


// Getting
export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user"));
}


// Deleting
export const removeLocalStorage = () => {
    localStorage.removeItem("user");
}