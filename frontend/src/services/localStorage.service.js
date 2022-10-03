// Création
export const setLocalStorage = (userId, isAdmin, token) => {
    const user = {
        userId: userId,
        isAdmin: isAdmin,
        token: token
    };
    localStorage.setItem("user", JSON.stringify(user));
}


// Affichage
export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user"));
}


// Suppression
export const removeLocalStorage = () => {
    localStorage.removeItem("user");
}
