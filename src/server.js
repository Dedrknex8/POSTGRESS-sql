require('dotenv').config();

const { createUserTable } = require('./concepts/basic-queris')

// test  basic queries
async function testbasicQuery() {
    try {
        
        await createUserTable()
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    await testbasicQuery()
}
runAllQuery();