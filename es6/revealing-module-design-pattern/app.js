const App = (function () {
    // private variables and methods
    let counter = 0;
    const incrementCounter = () => counter++;
    const getCounter = () => {
        return counter;
    }
    const setCounter = (n) => {
        counter = n;
    }
    const doubleCounter = () => counter = counter * 2;

    // public variables and methods
    return {
        get: getCounter,
        set: setCounter,
        next: incrementCounter
    };
})();

console.log(App.get());
App.set(10);
console.log(App.get());
App.next();
console.log(App.get());