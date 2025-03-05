//Basic query commands

const db = require('../db/db');

async function createUserTable() {
    const createUserTable = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;
    try{
        await db.query(createUserTable)
            console.log('User table created sucessfully');
    }catch(err){
        console.log('error creatting the table',err);
        
    }
}

module.exports = {createUserTable};