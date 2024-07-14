const mysql = require('mysql2')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog_platform'
})

db.connect((error) => {
    try {
        if(error){
            console.error("Error connecting to database: ", error)
            return;
        }
        console.log('Connected to the database')
    } catch (error) {
        
    }
})
module.exports = db;