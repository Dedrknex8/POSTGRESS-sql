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

async function insertUser(username,email) {
    
    const insertUserQuery = `
    INSERT INTO users (username,email)
    VALUES ($1,$2) 
    RETURNING *
    `
    try {

        const res = await db.query(insertUserQuery,[username,email])
        console.log('user inserted successfully',res.rows[0]);

        return res.rows[0]
        

    } catch (error) {
        console.log('Error inserting',error);
        
    }
}

async function getUserTable(){
    const getUSers='SELECT * FROM users'

    try {
        
        const result = await db.query(getUSers);
        console.log('Fetched all users');

        return result.rows
        

    } catch (error) {
        console.log('Error getting the table',error);
        
    }
}

//Update  User information

async function updateQuery(username,newemail){
    const updateUserQuery = `
    UPDATE users
    SET email = $2
    WHERE username = $1
    RETURNING *
    `
    try {
        const result = await db.query(updateUserQuery,[username,newemail]);

        if(result.rows.length > 0){
            console.log('User email updated sucessfully');
            return result.rows[0];
        }


    } catch (error) {
        console.log(`Error Updating  the record ${error}`);
        
    }
}

async function deleteUser(username){
    const deleteUserQuery = `
    DELETE FROM users
    WHERE username = $1
    RETURNING *;
    `
    
    try {
     const result = await db.query(deleteUserQuery,[username]);

     if(result.rows.length > 0){
        console.log('User deleted sucessfully');
        return result.rows[0];
        
     }
    } catch (error) {
        console.log('Error deleting the user',error);
        
    }
}
module.exports = {
    createUserTable,
    insertUser,
    getUserTable,
    updateQuery,
    deleteUser
};