require('dotenv').config();

const { createUserTable,insertUser,getUserTable,updateQuery,deleteUser } = require('./concepts/basic-queris')

// test  basic queries
async function testbasicQuery() {
    try {
        
        // await createUserTable()

        // await insertUser('make','maker@gmail.com')
        // const allUsers = await getUserTable();
        // console.log('users ->',allUsers);
        // const updateDetails = await updateQuery('make','newmake@xyz.com');
        // console.log(updateDetails);
        const deleteUsers = await deleteUser('make');
        console.log(deleteUser);
        

        
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    //this will run all the query
    await testbasicQuery()
}
runAllQuery();