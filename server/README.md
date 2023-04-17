# Database

npx sequelize-cli model:generate --name user --attributes nama:string,username:string,password:string,role:string

npx sequelize-cli model:generate --name detail_user --attributes contact:string,image:string,description:text,userId:integer

npx sequelize-cli model:generate --name order --attributes userId:integer,paketId:integer,status:boolean,rating:integer

npx sequelize-cli model:generate --name paket --attributes description:text,image:string,userId:integer,price:integer

# Route
## User
|METODE....|ROUTE.....................|KETERANGAN...............................|
|GET       |user/profile              |mengambil detail user menggunakan parameter token|
|GET       |user/order                |mengambil list order user|
|GET       |user/detailorder/:id      |mengambil detail order berdasar id|
|GET       |user/listpaket            |mengambil list paket|
|DELETE    |user/order/:paketId       |menghapus order user sesuai berdasarkan userId dari token dan paketId|
|PUT       |user/edit                 |mengedit semua informasi user kecuali username|
|POST      |user/login                |login menggunakan akun user|
|POST      |user/create               |membuat akun user|
|POST      |user/createorder/:id      |mengambil order dengan id paket|


## Joki
|METODE....|ROUTE.....................|KETERANGAN...............................|
|GET       |joki/profile              |mengambil detail joki menggunakan parameter token|
|GET       |joki/paket                |mengambil list paket dengan token sebagai acuan pemilik paket|
|GET       |joki/detaipaket/:id       |mengambil detail paket berdasar id|
|GET       |joki/paketordered         |mengambil list paket yang telah diorder dan yang order|
|DELETE    |joki/paket/:id            |menghapus paket user sesuai id dari paket|
|PUT       |joki/edit                 |mengedit semua informasi joki kecuali username|
|POST      |joki/login                |login menggunakan akun joki|
|POST      |joki/create               |membuat akun joki|
|POST      |joki/createpaket          |membuat paket|


## Keterangan
semua harus ada token kecuali create akun dan login.