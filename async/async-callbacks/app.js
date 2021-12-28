// call backs
const boilWater = (callback) => {
    setTimeout(_ => {
        callback('water ready.');
    }, 10000);
};

const prepareOnions = (callback) => {
    setTimeout(_ => {
        callback('onions ready.');
    }, 3000);
};

const prepareEggs = (callback) => {
    setTimeout(_ => {
        callback('eggs ready.');
    }, 2000);
};

const mix = (callback) => {
    setTimeout(_ => {
        callback('mixed and ready to eat.');
    }, 2000);
};

// async operiations happening synchronus
function eatRamen(){
    boilWater((elem) => {
        console.log(elem);
        prepareOnions(elem => {
            console.log(elem);
            prepareEggs(elem => {
                console.log(elem);
                mix(elem => {
                    console.log(elem);
                });
            });
        });
    });
}

eatRamen();


