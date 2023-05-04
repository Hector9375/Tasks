const db = require('../db/connection');

const getAllTasks = (req, res) => {
    let query = `SELECT * FROM todo`;
    db((conn) => {
        conn.query(query,(err, result, fileds) => {
            if(!err) {
                res.send(result);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
    
}

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

const createTask = (req, res) => {
    let query = `INSERT INTO todo(title,created_at) VALUES('${req.body.title}', NOW())`;
    db((conn)=>{
        conn.query(query,(err,result,fields)=>{
            if(!err) {
                res.send(req.body);
            }else{
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
}

const getTask = (req, res) => {
    res.json({id:req.params.id});
}

const updateTask = (req, res) => {
    let query = `UPDATE todo SET completed = true WHERE id = ${req.params.id}`;
    db((conn)=>{
        conn.query(query,(err, result, fields)=> {
            if(!err) {
                res.send(result);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })    
}
const deleteTask = (req, res) => {
    let query = `DELETE FROM todo WHERE id = ${req.params.id} `;
    db((conn) => {
        conn.query(query,(err, result, fields) => {
            if(!err) {
                res.send(result);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
