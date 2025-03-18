const names = ['Bob', 'Dale', 'Laura', 'Audrey', 'Margaret', 'Harry', 'Leland', 'Ed', 'Tommy']


console.log('We are running printTable.js!')

// change value of element on page:
const tableElement = document.getElementById("tb1");
names.forEach(name => {
    console.log(`Adding ${name} to table...`)
    tableElement.innerHTML += '<tr><td>' + name + '</td></tr>'
});
