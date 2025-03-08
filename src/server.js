require('dotenv').config();

const { createUserTable,insertUser,getUserTable,updateQuery,deleteUser } = require('./concepts/basic-queris')
const {getUsersWhere,sotredUers} = require('./concepts/filter-soritng')
// test  basic queries
async function testbasicQuery() {
    try {
        
        await createUserTable()

        await insertUser('john','doe@gmail.com')
        // const allUsers = await getUserTable();
        // console.log('users ->',allUsers);
        // const updateDetails = await updateQuery('make','newmake@xyz.com');
        // console.log(updateDetails);
        // const deleteUsers = await deleteUser('make');
        // console.log(deleteUser);
        

        
    } catch (error) {
        console.log(error);
        
    }
}

async function runAllQuery(){
    //this will run all the query
    // await testbasicQuery()
}

async function filterQuery(){
    try {
        //get users with username with m
        // const mFilteredUser = await getUsersWhere("username LIKE 'm%'");
        // console.log(mFilteredUser);
        const getSorted = await sotredUers('created_at','DESC');
        console.log(getSorted);
        
    } catch (error) {
        console.log(`error`,error);
        
    }
}

filterQuery()
runAllQuery();