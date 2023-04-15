const {user, detail_user, order, paket} = require('../models');
const { decryptPW } = require('../helpers/bycript');
const { tokenGenrator,tokenVerifier } = require('../helpers/token');

class userController{
    static async detailUser(req, res){
        try{
            const access_token = req.headers.access_token;
            const id = tokenVerifier(access_token).id;
            let result = await user.findOne({
                where: {id}
            },{
                include:detail_user
            })
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async create(req,res){
        try{
            const {nama, username, password, contact, description} = req.body;
            const role = "users"
            let result = await user.create({
                nama, username, password, role
            });
            if(!req.file){
                let result2 = await detail_user.create({
                    contact,
                    image: "",
                    description,
                    userId : result.id
                })
            }else{
                let result2 = await detail_user.create({
                    contact,
                    image: req.file.originalname,
                    description,
                    userId : result.id
                })
            }
            res.status(201).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async update(req,res){
        try{
            const {nama, username, password, contact, description} = req.body;
            const id = req.params.id;
            const role = "users";
            let result = await user.update({
                nama, username, password, role
            },{
                where: {id}
            })
            if(!req.file){
                let result2 = await user_detail.update({
                    contact,
                    description
                },{
                    where:{
                        userId: id
                    }
                })
            }else{
                let result2 = await user_detail.update({
                    contact,
                    image : req.file.filename,
                    description
                },{
                    where:{
                        userId: id
                    }
                })
            }
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async delete(req,res){
        try{
            const id = req.params.id;
            let result = await user.destroy({
                where: {id}
            });
            if(result === 1){
                res.status(200).json({
                    message:`User id: ${id} was deleted`
                });
            }else{
                res.status(404).json({
                    message:`User id: ${id} not found`
                })
            }
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async createOrder(req,res){
        try{
            const access_token = req.headers.access_token;
            const userId = tokenVerifier(access_token).id;
            const paketId = req.params.id;
            let result = await order.create({
                userId,
                paketId,
                status: false,
                rating: 0
            })
            res.status(201).json({});
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async listOrder(req,res){
        try{
            const access_token = req.headers.access_token;
            const userId = tokenVerifier(access_token).id;
            //const userId = req.params.userId
            let result = await order.findAll({
                where:{userId}
            },{
                include:{all:true, nested:true}
            })
            res.status(200).json(result);
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async detailOrder(req, res){
        try{
            const id = req.params.id;
            let result = await order.findOne({
                where:{id}
            },{
                include:{all:true, nested:true}
            })
            res.status(200).json(result);
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async deleteOrder(req,res){
        try{
            const id = req.params.id;
            let result = await order.destroy({
                where:{id}
            });
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async login(req,res){
        try{
            const {username, password} = req.body
            let result = await user.findOne({
                where: {username}
            })
            if(result){
                let pass = decryptPW(password, result.password)
                if(pass){
                    let access_token = tokenGenrator(result);
                    res.status(200).json(access_token);
                }else{
                    res.status(404).json({message:'wrong password'})
                }

            }else{
                res.status(404).json({message:'username not found'})
            }
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async upload(req,res){
        try{
            if(!req.file){
                console.log('no image')
            }else{
                console.log(req.file.filename)
            }
            //res.send({message:'no file'})
        }catch(err){
            res.send(err);
        }
    }
}

module.exports = userController