const names = ['Bob', 'Dale', 'Laura', 'Audrey', 'Margaret', 'Harry', 'Leland', 'Ed', 'Tommy']


console.log('We are running printTable.js!')

let totalSleepTime = 0
const tableElement = document.getElementById("tb1");
names.forEach(name => {
    const sleepTime = 500 + (Math.random() * 1000)
    sleep(sleepTime)
    tableElement.innerHTML += '<tr><td>' + name + '</td></tr>'
    totalSleepTime += sleepTime
});


function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}


const isFinishedElement = document.getElementById("isFinished");
isFinishedElement.innerHTML += `Script has finished! Page loaded after ${Math.round(totalSleepTime/1000)}[s]`