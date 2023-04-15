const { tokenVerifier } = require('../helpers/token')

const authenticationUser = (req, res, next) => {
    console.log("Middleware authentication")
    const access_token = req.headers.access_token

    if (access_token) {
        console.log("Token ada")
        try {
            let verifyToken = tokenVerifier(access_token)
            if (verifyToken.role == "users"){
                req.userData = verifyToken
                next()
            }else{
                res.status(401).json({
                    message: "You dont have permission!"
                })
            }
        } catch (err) {
            res.status(401).json({
                message: "Token not authenticated!"
            })
        }
    } else {
        res.status(404).json({
            message: "Access token not found!"
        })
    }
}

const authenticationJoki = (req, res, next) => {
    console.log("Middleware authentication")
    const access_token = req.headers.access_token

    if (access_token) {
        console.log("Token ada")
        try {
            let verifyToken = tokenVerifier(access_token)
            if (verifyToken.role == "jokis"){
                req.userData = verifyToken
                next()
            }else{
                res.status(401).json({
                    message: "You dont have permission!"
                })
            }
        } catch (err) {
            res.status(401).json({
                message: "Token not authenticated!"
            })
        }
    } else {
        res.status(404).json({
            message: "Access token not found!"
        })
    }
}

module.exports = {
    authenticationUser,
    authenticationJoki
}