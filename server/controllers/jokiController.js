const {user, paket,order,detail_user} = require('../models');
const { decryptPW } = require('../helpers/bycript');
const { tokenGenrator,tokenVerifier } = require('../helpers/token');

class jokiController{
    static async detailJoki(req, res){
        try{
            const access_token = req.headers.access_token;
            const id = tokenVerifier(access_token).id;
            let result = await user.findOne({
                where: {id},
                include:detail_user
            })
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async create(req,res){
        try{
            const {nama, username, password, contact,  description} = req.body;
            const role = "jokis"
            let result = await user.create({
                nama, username, password, role
            });
            if(!req.file){
                let result2 = await detail_user.create({
                    contact,
                    image:"",
                    description,
                    userId : result.id
                })
            }else{
                let result2 = await detail_user.create({
                    contact,
                    image: req.file.filename,
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
            const {nama, password, contact,  description} = req.body;
            const id = req.params.id;
            const role = "jokis";
            let result = await user.update({
                nama, password, role
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
                    image: req.file.filename,
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

    static async createPaket(req,res){
        try{
            const{description, price} = req.body;
            const access_token = req.headers.access_token;
            const userId = tokenVerifier(access_token).id;
            let result
            if(!req.file){
                result = await paket.create({
                    description, 
                    image:"",
                    userId, 
                    price
                })
            }else{
                result = await paket.create({
                    description, 
                    image: req.file.filename,
                    userId, 
                    price
                })
            }
            res.status(201).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async editPaket(req,res){
        try{
            const id = req.params.id;
            const{description, image, price} = req.body;
            if(!req.file){
                let result = await paket.update({
                    description, 
                    image, 
                    price
                },{
                    where:{id}
                })
            }else{
                let result = await paket.update({
                    description, 
                    image: req.file.filename, 
                    price
                },{
                    where:{id}
                })
            }
            res.status(201).json(result);
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async deletePaket(req,res){
        try{
            const id = req.params.id;
            let result = paket.destroy({
                where:{id}
            })
            if(result === 1){
                res.status(200).json({
                    message:`Paket id: ${id} was deleted`
                });
            }else{
                res.status(404).json({
                    message:`Paket id: ${id} not found`
                })
            }
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async listPaket(req,res){
        try{
            const access_token = req.headers.access_token;
            const userId = tokenVerifier(access_token).id;
            let result = await paket.findAll({
                where:{userId}
            })
            res.status(200).json(result)
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async detailPaket(req,res){
        try{
            const id = req.params.id
            let result = await paket.findOne({
                where:{id}
            })
            res.status(200).json(result)
        }catch(err){
            res.status(404).json(err);
        }
    }

    static async listPaketOrdered(req,res){
        try{
            const access_token = req.headers.access_token;
            const userId = tokenVerifier(access_token).id;
            //let userId = req.params.id;
            let result = await order.findAll({
                include:[
                    {model: user},
                    {model: paket,
                        where:{
                            userId
                        }
                    }
                ]
            })
            res.status(200).json(result)
        }catch(err){
            res.status(404).json(err);
        }
    }
}

module.exports = jokiController;