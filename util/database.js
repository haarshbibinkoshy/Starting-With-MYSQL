const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'local',
    user: 'root',
    database:'node-complete',
    password: 'Koshysugi18@'
})

module.exports=pool.promise()