const multer = require("multer");

// "Dictionary" to generate the appropriate file extension 
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
};

// Configuring disk storage path and filename for incoming files
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_").split(".")[0];
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + "." + extension);
    }
});

// Exporting the package, configured to only accept single files 
// with HTML attribute name = attachment
module.exports = multer({ storage: storage }).single("image");