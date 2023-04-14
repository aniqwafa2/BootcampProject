const bcrypt = require('bcrypt');

const encryptPW = (pass) => {
    return bcrypt.hashSync(String(pass),9);
}

const decryptPW = (pass, encryptedPass) => {
    return bcrypt.compareSync(String(pass),encryptedPass,9);
}

module.exports = {
    encryptPW, decryptPW
}