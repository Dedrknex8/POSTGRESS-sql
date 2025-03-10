
const db = require('../db/db');

async function countPosts(){
    const countPostsQury = `
    SELECT username, COUNT(posts.id) as post_count
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
    GROUP BY users.id,username 
    ORDER BY post_count ASC 
    `
    try {
        const result = await  db.query(countPostsQury);
        
        return result.rows;

    } catch (error) {
        console.log('error found aggregation',error);
        
    }
}

module.exports = {countPosts};