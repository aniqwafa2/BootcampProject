const {user, detail_user, order, paket} = require('../models');

class userController{
    static async detailUser(req, res){
        try{
            const id = req.params.id;
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
            const {nama, username, password, contact, image, description} = req.body;
            const role = "users"
            let result = await user.create({
                nama, username, password, role
            });
            let result2 = await datail_user.create({
                contact,
                image,
                description,
                userId : result.id
            })
            res.status(201).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }

    static async update(req,res){
        try{
            const {nama, username, password, contact, image, description} = req.body;
            const id = req.params.id;
            const role = "users";
            let result = await user.update({
                nama, username, password, role
            },{
                where: {id}
            })
            let result2 = await user_detail.update({
                contact,
                image,
                description
            },{
                where:{
                    userId: id
                }
            })
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
            const userId = req.params.userId;
            const paketId = req.params.paketId;
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
            const userId = req.params.userId
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
}

module.exports = userController