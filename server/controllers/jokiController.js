const {user} = require('../models');

class jokiController{
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
            const role = "jokis"
            let result = await user.create({
                nama, username, password, role
            });
            let result2 = await detail_user.create({
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
            const role = "jokis";
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
}

module.exports = jokiController;