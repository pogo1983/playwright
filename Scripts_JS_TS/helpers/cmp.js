let cmp = function(v1, v2) { return v1 == v2; };
let cmpTriple = function(v1, v2) { return v1 === v2; };
let vals = [
    ["-Inf", function() { return -Infinity; }],
    ["-1", function() { return -1; }],
    ['"-1"', function() { return "-1"; }],
    ['""', function() { return ""; }],
    ["[[]]", function() { return [[]]; }], 
    ["[]", function() { return []; }], 
    ["false", function() { return false; }], 
    ["0", function() { return 0; }],
    ["null", function() { return null; }],
    ['"0"', function() { return "0"; }], 
    ["[0]", function() { return [0]; }], 
    ["[1]", function() { return [1]; }],
    ['"1"', function() { return "1"; }],
    ["1",function() { return  1; }],
    ["true", function() { return true; }],
    ["Inf", function() { return Infinity; }],
    ["{}", function() { return {}; }], 
    ['"false"', function() { return "false"; }],
    ['"true"', function() { return "true"; }],
    ["undefined", function() { return undefined; }],
    ["NaN", function() { return NaN; }]
];

let n = vals.length;
let header = []
for (let i = 0; i < n; i++) {
    header.push(vals[i][0])
}
console.log('Javascript Equality for "==":')
console.log('')
console.log(` \t`, header.join('\t'))
for (let i = 0; i < n; i++) {
    let row = []
    let v1 = vals[i][1]();
    for (let j = 0; j < n; j++) {
        let v2 = vals[j][1]();
        let eq = cmp(v1, v2);
        if (eq === true) {
            row.push('T\t')
        } else {
            row.push('\t')
        }
    }
    console.log(`${vals[i][0].padEnd(10)}`, row.join(''))
}
console.log('')
console.log('')
console.log('Javascript Equality for "===":')
console.log('')
console.log(` \t`, header.join('\t'))
for (let i = 0; i < n; i++) {
    let row = []
    let v1 = vals[i][1]();
    for (let j = 0; j < n; j++) {
        let v2 = vals[j][1]();
        let eq = cmpTriple(v1, v2);
        if (eq === true) {
            row.push('T\t')
        } else {
            row.push('\t')
        }
    }
    console.log(`${vals[i][0].padEnd(10)}`, row.join(''))
}
// based on: https://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html