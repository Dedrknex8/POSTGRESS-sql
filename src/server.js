require('dotenv').config();

const { createUserTable,insertUser,getUserTable,updateQuery } = require('./concepts/basic-queris')

// test  basic queries
async function testbasicQuery() {
    try {
        
        // await createUserTable()

        // await insertUser('make','maker@gmail.com')
        // const allUsers = await getUserTable();
        // console.log('users ->',allUsers);
        const updateDetails = await updateQuery('make','newmake@xyz.com');
        console.log(updateDetails);
        

        
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    //this will run all the query
    await testbasicQuery()
}
runAllQuery();