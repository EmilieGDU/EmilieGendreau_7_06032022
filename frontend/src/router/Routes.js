import Home from "../views/Home";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "Accueil",
            metaTags: [
                {
                    name: "description",
                    content: "Ceci est la page d'accueil de Groupomania."
                },
                {
                    name: "og:description",
                    content: "Ceci est la page d'accueil de Groupomania."
                },
            ]
        }
    },
]

export default routes;