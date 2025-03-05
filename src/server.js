require('dotenv').config();

const { createUserTable,insertUser } = require('./concepts/basic-queris')

// test  basic queries
async function testbasicQuery() {
    try {
        
        // await createUserTable()

        await insertUser('make','maker@gmail.com')
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    await testbasicQuery()
}
runAllQuery();