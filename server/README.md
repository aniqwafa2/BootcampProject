# Database

npx sequelize-cli model:generate --name user --attributes nama:string,username:string,password:string,role:string

npx sequelize-cli model:generate --name detail_user --attributes contact:string,image:string,description:text,userId:integer

npx sequelize-cli model:generate --name order --attributes userId:integer,paketId:integer,status:boolean,rating:integer

npx sequelize-cli model:generate --name paket --attributes description:text,image:string,userId:integer,price:integer