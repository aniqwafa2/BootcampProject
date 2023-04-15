const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'uploaded');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadImage = multer({storage: storage});

module.exports = uploadImage