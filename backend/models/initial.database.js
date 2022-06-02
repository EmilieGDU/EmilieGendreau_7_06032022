// #########################################################
//                     Adding Users
// #########################################################

const users = [
    {
        // id: provided automatically by the database
        firstName: "Bénédicte",
        lastName: "DURAND",
        email: "b.durand-drh@groupomania.com",
        password: "P455W0rd",
        about: "DRH de l'entreprise, j'ai à coeur de vous accompagner dans votre épanouissement au travail.",
        imageUrl: "../images/default_img.png",
        isAdmin: false
    },
    {
        // id: provided automatically by the database
        firstName: "Pierre",
        lastName: "DUPONT",
        email: "p.dupont-marketing@groupomania.com",
        password: "P455W0rd2",
        about: "Responsable de l'équipe marketing.",
        imageUrl: "../images/default_img.png",
        isAdmin: false
    },
    {
        // id: provided automatically by the database
        firstName: "Isabelle",
        lastName: "MARTIN",
        email: "i.martin-marketing@groupomania.com",
        password: "P455W0rd3",
        about: "Parlant couramment l'anglais et le chinois, je suis chargée des négociations tarifaires à l'international.",
        imageUrl: "../images/default_img.png",
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
        attachment: "../images/break_room.png",
        likes: 0
    },
    {
        // id: provided automatically by the database
        UserId: 4,
        title: "Méditation chinoise",
        body: "L'été dernier, j'ai découvert une technique de méditation chinoise : le Qigong. Idéal pour se ressourcer ! Nous pourrions demander à Bénédicte de réserver une séance d'initiation avec un coach spécialisé. Qui est partant ?",
        attachment: "../images/qigong.png",
        likes: 0
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
        comment: "Un bon canapé !"
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
        comment: "Bonne idée Isabelle !"
    },
];

module.exports = {users, posts, comments};