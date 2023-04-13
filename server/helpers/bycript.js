const bcrypt = require('bcrypt');

const encrypt = (pass) => {
    return bcrypt.hashSync(pass,9);
}

const decrypt = (pass,encryptedPass) => {
    return bcrypt.compareSync(pass,encryptedPass);
}

module.exports = {
    encrypt, decrypt
}