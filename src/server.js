require('dotenv').config();

const { createUserTable,insertUser,getUserTable } = require('./concepts/basic-queris')

// test  basic queries
async function testbasicQuery() {
    try {
        
        // await createUserTable()

        // await insertUser('make','maker@gmail.com')
        const allUsers = await getUserTable();
        console.log('users ->',allUsers);
        
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    await testbasicQuery()
}
runAllQuery();