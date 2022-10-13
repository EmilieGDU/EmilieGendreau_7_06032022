import HomeView from "../views/Home";
import SignupView from "../views/Signup";
import LoginView from "../views/Login";
import FeedView from "../views/Feed";
import ProfileView from "../views/Profile";
import NotFoundView from "../views/NotFound";
import LogoutView from "../views/Logout";


const routes = [
    {
        name: "Home",
        path: "/",
        component: HomeView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "Accueil",
            metaTags: [
                {
                    name: "description",
                    content: "Bienvenue sur la page d'accueil du réseau social d'entreprise de Groupomania. Cet espace convivial est réservé au personnel de Groupomania uniquement."
                },
                {
                    name: "og:description",
                    content: "Bienvenue sur la page d'accueil du réseau social d'entreprise de Groupomania. Cet espace convivial est réservé au personnel de Groupomania uniquement."
                },
                {
                    name: "og:image",
                    content: "http://localhost:3000/images/groupomania_logo.png"
                },
            ]
        }
    },
    {
        name: "Signup",
        path: "/signup",
        component: SignupView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "S'inscrire",
            metaTags: [
                {
                    name: "description",
                    content: "Bienvenue sur le réseau social de Groupomania. Pour pouvoir vous inscrire, vous devez faire partie du personnel."
                },
                {
                    name: "og:description",
                    content: "Bienvenue sur le réseau social de Groupomania. Pour pouvoir vous inscrire, vous devez faire partie du personnel."
                },
            ]
        }
    },
    {
        name: "Login",
        path: "/login",
        component: LoginView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "S'identifier",
            metaTags: [
                {
                    name: "description",
                    content: "Bienvenue sur votre réseau social d'entreprise. Cet espace est le vôtre. Groupomania vous souhaite des échanges enrichissants."
                },
                {
                    name: "og:description",
                    content: "Bienvenue sur votre réseau social d'entreprise. Cet espace est le vôtre. Groupomania vous souhaite des échanges enrichissants."
                },
            ]
        }
    },
    {
        name: "Feed",
        path: "/feed",
        component: FeedView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "Fil d'actualité",
            metaTags: [
                {
                    name: "description",
                    content: "Bienvenue sur le fil d'actualité du réseau social d'entreprise de Groupomania. Cet espace convivial vous permet d'échanger et de faire plus ample connaissance avec vos collègues. A cet effet, vous avez la possibilité de publier des articles personnels et de commenter les publications des autres salariés de l'entreprise. Le respect de chacun est impératif. Tout manquement à ce principe de politesse élémentaire se verra sanctionné par l'administrateur, qui se réserve le droit de supprimer vos publications et/ou votre compte."
                },
                {
                    name: "og:description",
                    content: "Bienvenue sur le fil d'actualité du réseau social d'entreprise de Groupomania. Cet espace convivial vous permet d'échanger et de faire plus ample connaissance avec vos collègues. A cet effet, vous avez la possibilité de publier des articles personnels et de commenter les publications des autres salariés de l'entreprise. Le respect de chacun est impératif. Tout manquement à ce principe de politesse élémentaire se verra sanctionné par l'administrateur, qui se réserve le droit de supprimer vos publications."
                },
            ]
        }
    },
    {
        name: "Profile",
        path: "/profile",
        component: ProfileView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "Mon profil",
            metaTags: [
                {
                    name: "description",
                    content: "Bienvenue sur votre page de profil au sein du réseau social d'entreprise de Groupomania. Cette page vous permet de gérer vos publications ainsi que vos commentaires (modification, suppression)."
                },
                {
                    name: "og:description",
                    content: "Bienvenue sur votre page de profil au sein du réseau social d'entreprise de Groupomania. Cette page vous permet de gérer vos publications ainsi que vos commentaires (modification, suppression)."
                },
            ]
        }
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)",
        component: NotFoundView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "404 Not Found",
            metaTags: [
                {
                    name: "description",
                    content: "L'adresse recherchée n'existe pas."
                },
                {
                    name: "og:description",
                    content: "L'adresse recherchée n'existe pas."
                },
            ]
        }
    },
    {
        name: "Logout",
        path: "/logout",
        component: LogoutView, 
        // Adding Route Meta Field (supported by vue-router)
        meta: {
            title: "Déconnexion",
            metaTags: [
                {
                    name: "description",
                    content: "Vous êtes à présent déconnecté(e) de votre réseau social d'entreprise. A bientôt."
                },
                {
                    name: "og:description",
                    content: "Vous êtes à présent déconnecté(e) de votre réseau social d'entreprise. A bientôt."
                },
            ]
        }
    }
]

export default routes;