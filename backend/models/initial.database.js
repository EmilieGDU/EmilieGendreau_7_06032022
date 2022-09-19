// #########################################################
//                     Adding Users
// #########################################################

const users = [
    {
        // id: provided automatically by the database
        firstName: "Bénédicte",
        lastName: "DURAND",
        email: "benedicte.durand.drh@groupomania.com",
        password: "P455W0rd",
        about: "DRH de l'entreprise, j'ai à coeur de vous accompagner dans votre épanouissement au travail.",
        imageUrl: "http://localhost:3000/images/default_img.png",
        isAdmin: false
    },
    {
        // id: provided automatically by the database
        firstName: "Pierre",
        lastName: "DUPONT",
        email: "pierre.dupont.marketing@groupomania.com",
        password: "P455W0rd2",
        about: "Responsable de l'équipe marketing.",
        imageUrl: "http://localhost:3000/images/default_img.png",
        isAdmin: false
    },
    {
        // id: provided automatically by the database
        firstName: "Isabelle",
        lastName: "MARTIN",
        email: "isabelle.martin.marketing@groupomania.com",
        password: "P455W0rd3",
        about: "Parlant couramment l'anglais et le chinois, je suis chargée des négociations tarifaires à l'international.",
        imageUrl: "http://localhost:3000/images/default_img.png",
        isAdmin: false
    },
];

// #########################################################
//                     Adding Posts
// #########################################################

const posts = [
    {
        // id: provided automatically by the database
        UserId: 2,
        title: "Votre salle de pause idéale",
        body: "Quels sont les facteurs qui contribuent à votre détente en salle de pause ? A vos commentaires !",
        attachment: "http://localhost:3000/images/break_room.png"
    },
    {
        // id: provided automatically by the database
        UserId: 4,
        title: "Méditation chinoise",
        body: "L'été dernier, j'ai découvert une technique de méditation chinoise : le Qigong. Idéal pour se ressourcer ! Nous pourrions demander à Bénédicte de réserver une séance d'initiation avec un coach spécialisé. Qui est partant ?",
        attachment: "http://localhost:3000/images/qigong.png"
    },     
    {
        // id: provided automatically by the database
        UserId: 4,
        title: "C'est la rentrée !",
        body: "Toute l'équipe est heureuse de vous retrouver et espère que vous avez passé un bel été.",
        attachment: "http://localhost:3000/images/welcome_back.png"
    },     
];

// #########################################################
//                    Adding Comments
// #########################################################

const comments = [
    {
        // id: provided automatically by the database
        PostId: 1,
        UserId: 3,
        comment: "Un distributeur de boissons chaudes."
    },
    {
        // id: provided automatically by the database
        PostId: 1,
        UserId: 4,
        comment: "La lumière naturelle et quelques plantes vertes."
    },
    {
        // id: provided automatically by the database
        PostId: 2,
        UserId: 2,
        comment: "Bonne idée !"
    },
    {
        // id: provided automatically by the database
        PostId: 3,
        UserId: 2,
        comment: "Bonne reprise à tous."
    },
];

// #########################################################
//                    Adding Likes
// #########################################################

const likes = [
    {
        PostId: 1,
        UserId: 4,
    },
    {
        PostId: 2,
        UserId: 2,
    },
    {
        PostId: 2,
        UserId: 3,
    },
    {
        PostId: 3,
        UserId: 3,
    },
    {
        PostId: 3,
        UserId: 2,
    },
];

module.exports = {users, posts, comments, likes};