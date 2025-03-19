// Your task:
// 1. Create new object, that will represent test user in any application
// 2. Add following properties to that object: name, address, password and set any values
// 3. Add another property to that object: rights, that will be an array with values: 'write' and 'read'
// 4. Print whole object on console
// 5. Print object property "name"
// 6. Change object property "name" to "admin"
// 7. Print changed property "name"

// to test your solution in terminal You can run following command:
// npm run es2e3

//// TODO:
// here place your solution:
const testUser = {

    userName : 'Pogo',
    address : 'Banino',
    password: 'testpass'
}
console.log(testUser, ' as Before Adding Rights')
testUser ['rights'] = ['write','read']
console.log(testUser,' as After Adding Rights')
console.log(testUser.userName,' as After Adding Rights')
testUser['userName']='PogoAdmin'
console.log(testUser.userName,' as After changing name Rights')



//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// Expected output of this script is following info on console:
// { name: 'test user', address: 'test@test.test', password: '1234', rights: ['write', 'read'] }
//
// test user
//
// admin
//
