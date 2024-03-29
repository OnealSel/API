const { createPool}= require("mysql");

const pool = createPool({ 
    port:process.env.DB_PORT ,
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:100
});
const pool2 = createPool({ 
    port:process.env.DB_PORT2 ,
    host: process.env.DB_HOST2,
    user:process.env.DB_USER2,
    password:process.env.DB_PASS2,
    database:process.env.MYSQL_DB2,
    connectionLimit:100
});


module.exports= pool;
module.exports= pool2;