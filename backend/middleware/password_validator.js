const passwordValidator = require("password-validator");

// Creating password schema
const passwordSchema = new passwordValidator();

// Implementing a strict password schema
passwordSchema
    .is().min(8)                                    // Minimum length 8
    .is().max(20)                                   // Maximum length 20
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces

// Checking the validity of the password
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    } 
    else {
        const message = "Le mot de passe doit contenir entre 8 et 20 caractères, au minimum 1 majuscule et 2 chiffres, et ne comporter aucun espace.";
        const failedValidation = passwordSchema.validate((req.body.password), {details: true});
        return res.status(400).json({ message, failedValidation });
    };
};