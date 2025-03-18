let clearDatabase = true


if (clearDatabase === true) {
    console.log('Database was cleared!')
} else {
    console.log('Database was not cleared!')
}

// Why we should use '===' instead of '=='?
// its more strict - eg. 
// 1 === 1 will return true
console.log('1 === 1 is:', 1 === 1)
// 1 === true will return false
console.log('1 === true is:', 1 === true)
// but...
// 1 == 1 will return true
console.log('1 == 1 is:', 1 == 1)
// 1 == true will return... true!
console.log('1 == true is:', 1 == true)
// This case is complicated...



// For '===' it is simple (T - means true):

//          -Inf   -1      '-1'    ''      [[]]    []      false   0       null    '0'     [0]     [1]     '1'     1       true    Inf     {}      'false' 'true'  undefined       NaN
// -Inf       T
// -1              T
// '-1'                    T
// ''                              T
// [[]]
// []
// false                                                   T
// 0                                                               T
// null                                                                    T
// '0'                                                                             T
// [0]
// [1]
// '1'                                                                                                     T
// 1                                                                                                               T
// true                                                                                                                    T
// Inf                                                                                                                             T
// {}
// 'false'                                                                                                                                         T
// 'true'                                                                                                                                                  T
// undefined                                                                                                                                                       T
// NaN

// ...but for '==' it get complicated (T - means true):

//          -Inf   -1      '-1'    ''      [[]]    []      false   0       null    '0'     [0]     [1]     '1'     1       true    Inf     {}      'false' 'true'  undefined       NaN
// -Inf       T
// -1              T       T
// '-1'            T       T
// ''                              T       T       T       T       T
// [[]]                            T                       T       T
// []                              T                       T       T
// false                           T       T       T       T       T               T       T
// 0                               T       T       T       T       T               T       T
// null                                                                    T                                                                                       T
// '0'                                                     T       T               T       T
// [0]                                                     T       T               T
// [1]                                                                                                     T       T       T
// '1'                                                                                             T       T       T       T
// 1                                                                                               T       T       T       T
// true                                                                                            T       T       T       T
// Inf                                                                                                                             T
// {}
// 'false'                                                                                                                                         T
// 'true'                                                                                                                                                  T
// undefined                                                               T                                                                                       T
// NaN




// Javascript Equality CHEATSHEET
// https://dorey.github.io/JavaScript-Equality-Table/#three-equals
// https://dorey.github.io/JavaScript-Equality-Table/


// articles and links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
