const jwt = require('jsonwebtoken');
const secreatCode = "loggedIn"

const tokenGenrator = (data) => {
    const { id, name, username, role} = data
    return jwt.sign({
        id, name, username, role
    }, secreatCode)
}
 const tokenVerifier = (token) => {
    return jwt.verify(token, secreatCode);
 }  

module.exports = {
    tokenGenrator,
    tokenVerifier
}