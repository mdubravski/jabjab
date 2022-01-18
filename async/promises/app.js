/*
 * promise can either be fulfilled, resolved, rejected
 */

// example 01
const happy = false;

// make promise
const greeting = new Promise((resolve, reject) => {
    if(happy){
        resolve('(Promise Resolved) Hello! how are you?');
    }else{
        reject('(Promise Rejected) NOPE');
    }
});

// call promise
greeting.then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// example 02
let hasStudied = true;

const takeTest = _ => {
    return new Promise((resolve, reject) => {
        const license ={
            name: 'Series 7',
            year: 2022,
        }

        if(hasStudied){
            resolve(license);
        }else{
            reject('Promise Rejected, You Failed');
        }
    });
};

takeTest().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// example 03 chain promises

const applyJob = data => {
    return new Promise((resolve,reject) => {
        if(data.year === 2022){
            resolve('You got the job!');
        }else{
            reject('Invalid License');
        }
    });
};

takeTest()
    .then(result => {
        return applyJob(result);
    })
    .then(result => {
        console.log(result);
    })