const {Pool} = require('pg');


//CREATE A NEW POOL INSTANCE TO MANAGE DB CONNECTION

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

//A function to fetch and pass query
async function query(text,params){
    const start = Date.now();

    try {
        const result = await pool.query(text,params);

        //execution time
        const duration = Date.now() - start;

        console.log(`Executed query:, ${{text,duration,rows:result.rowCount}}`);
        return result;
        
    } catch (error) {
        console.log('error starting',error);
        
    }
}

module.exports = {query};