const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
})



// pool.getConnection((error, conn) => {
//     conn.query(`SELECT * FROM users`, (error, result, fields)=> {
//         if(!error) {
//             console.log(result);
//             conn.release();
//         } else {
//             throw error;
//         }
//     });
// })

module.exports = (callback)=>{
    pool.getConnection((err,conn)=>{
        if(!err){
            callback(conn);
        }else{
            console.error(err);
        }
    });
};