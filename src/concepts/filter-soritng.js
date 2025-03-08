const db = require('../db/db');

//where clause

async function getUsersWhere(condition){
    const getUserQuery = `
        SELECT * FROM users
        WHERE ${condition}
    `

    try {
        const result =await db.query(getUserQuery);
        return result.rows; 

    } catch (error) {
        console.log('error while filtering',error);
        
    }
}

async function sotredUers(column,order="ASC"){
    const getSortedQuery = `
    SELECT * FROM users
    ORDER BY ${column} ${order}
    `
    try {
        const result = await db.query(getSortedQuery);

        return result.rows;
    } catch (error) {
        console.log('error while sorting',error);
        
    }
}

module.exports = {getUsersWhere,sotredUers}