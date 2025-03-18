// to install new module You have to use command:
// npm i <package-name>
// or:
// npm install <package-name>


// how to find modules and <package-name>? 
// modules are available at https://www.npmjs.com/

// lets find module: faker-js
// This module is used to generate random data
// and can be used in tests to generate random names, dates, texts etc.

// https://www.npmjs.com/package/@faker-js/faker 



// on page You see that command to install module faker is:
// npm i @faker-js/faker




// after executing that command on console You will see:

// added 1 package, and audited 3 packages in 14s

// 1 high severity vulnerability

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// TIP: You can run "npm audit fix --force" to fix problems like "1 high severity vulnerability"




// after installation new directory will be created:
// node_modules 
// where all downloaded data and modules will be stored

// also new entry will be added to package.json:
// "dependencies": {
//     "@faker-js/faker": "^7.1.0"
// }

// so after installing new module in project, it will be added to package.json with information about its version.
// to check in terminal all installed modules with versions, You can use command:

// npm list



// it should return:

// jt-base@1.0.0 E:\Projects\jt-api\js-base
// └── @faker-js/faker@7.1.0

// how to use installed modules?
// it is also described on modules page:
// https://www.npmjs.com/package/@faker-js/faker 

import { faker } from "@faker-js/faker"

// this will generate random names:
console.log(faker.name.fullName())
console.log(faker.name.fullName())
console.log(faker.name.fullName())
console.log(faker.name.fullName())


