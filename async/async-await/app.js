// ex 1
// Promise
function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve('Finished!')
        },2000);
    });
}

// resolveAfter2Seconds()
//     .then(data => {
//         console.log(data);
//     })

// Async Await
async function play(){
    console.log('start');
    let result = await resolveAfter2Seconds();
    //let data = await anotherPromise();
    console.log(result);
}
play();

// ex 2

// 
// const getTriviaData = _ =>{
//     const dataEndPoint = `https://opentdb.com/api.php?amount=10&category=11&difficulty=hard`;
//     return fetch(dataEndPoint)
//         .then(res => res.json())
//         .then(data => console.log(data));
// };
// getTriviaData();

const getTriviaData = async _ =>{
        const dataEndPoint = `https://opentdb.com/api.php?amount=10&category=12&difficulty=hard`;
        const request = await fetch(dataEndPoint);
        const data = await request.json();
        console.log(data);
}

getTriviaData();