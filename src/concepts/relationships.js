const db = require('../db/db');

// SO RELATIONSHIP SHOWS A RELATION B\W TWO TABLES LIKE USER AND POST

async function createPostTable(){
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER  REFERENCES  users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `
    //CONCEPT TO TAKEWAY on casecade means when user deleted post to that user also delted

    try {
        await db.query(createTableQuery);
        console.log('Post table created successfully');
        
    } catch (error) {
        console.log('error while creating post table',error);
        
    }


}

async function insertPost(title,content,userId){
    const insertQuery = `
    INSERT INTO posts (title,content,user_id)
    VALUES ($1,$2,$3)
    RETURNING *
    `;

    try {
        const result = await db.query(insertQuery , [title,content,userId]);

        return result.rows[0];

    } catch (error) {
        console.log(`Error while inseting posts ${error}`);
        
    }
}
module.exports = {createPostTable,insertPost};