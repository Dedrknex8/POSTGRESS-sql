// joins -> it joins two table on basis of realtion like foreign key
// innerJoins -> reutrns only rows where there is match in both tables
// leftJoins -> returns all rows if conditon not macthed then returns null
const db = require('../db/db');

async function getUsersWithPosts() {
    const getUsersWithPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id;

    `

    try {
        const res =  await db.query(getUsersWithPostsQuery);

        return res.rows;
    } catch (error) {
        console.log('Error while inner joinin',error);
        
    }
}

module.exports = {getUsersWithPosts}