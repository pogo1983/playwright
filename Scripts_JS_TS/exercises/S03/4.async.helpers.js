export async function getUserListFromApi() {
    console.log('getUserListFromApi: simulation of async REST API request...')
    const userList = [
            { name: 'Dale Cooper', age: 40 },
            { name: 'Harry S. Truman', age: 39 },
            { name: 'Tommy "Hawk" Hill', age: 41 }
        ]
    return new Promise(resolve => {
        console.log('getUserListFromApi: backend is processing request for 2 seconds...')
        setTimeout(() => {
            console.log('getUserListFromApi: processing done - sending userList')
            resolve(userList);
        }, 2000);
    });
}
