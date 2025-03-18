const names = ['Bob', 'Dale', 'Laura', 'Audrey', 'Margaret', 'Harry', 'Leland', 'Ed', 'Tommy']


console.log('We are running printTable.js!')

// change value of element on page:
names.forEach(name => {
    loadProjectData(name)
});

async function loadProjectData(name) {
    console.log('loadProjectData: entering function')
    const sleepTime = 1000 + (Math.random() * 3000)
    return new Promise(resolve => {
        console.log(`loadProjectData: entering Promise and waiting for ${sleepTime}ms to return ${name}`)
        setTimeout(() => {
            console.log(`loadProjectData: Promise done - returning value: ${name} after ${sleepTime}ms`)
            const tableElement = document.getElementById("tb1");
            tableElement.innerHTML += '<tr><td>' + name + '</td></tr>'
            resolve(name);
        }, sleepTime);
    });
}

const isFinishedElement = document.getElementById("isFinished");
isFinishedElement.innerHTML += 'Script has finished! (tasks were delegated to Promises)'