// Your task:
// 1. Create if statement in function that will print player status depends on health value:
// - For 100 or more health we expect to get 'Player is alive and at full health!'
// - For health between 10 and 99 we expect to get 'Player is alive and at ok health.'
// - For health between 1 and 10 health we expect to get 'Player is alive and at very poor health!'
// - For less than 1 health we expect to get 'Player is dead.'

// TIP: to check if value is greater or equal 100:
// health >= 100
// TIP: to check if value is greater than 100:
// health > 100
// TIP: to check if value is between 100 and 200:
// health >= 100 && health < 200

// to test your solution in terminal You can run following command:
// npm run es2e1

//// TODO:
// here place your solution:

function printPlayersState(health) {

}




//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

printPlayersState(100)
printPlayersState(60)
printPlayersState(0)
printPlayersState(5)
printPlayersState(-1)

// Expected output:
// After running this script on console You should receive:
// Player is alive and at full health!
// Player is alive and at ok health.
// Player is dead.
// Player is alive and at very poor health!
// Player is dead.