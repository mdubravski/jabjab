// function declatation
// function alpha(){
//     console.log('alpha');
// }

// this function get overridden
function alpha(){
    console.log('foo');
}

alpha();

// this function will run
function alpha(){
    console.log('bar');
}

// function expression
// let beta = function(){
//     console.log('beta');
// }

// this function wil run bc function expressions dont get hoiseted
var beta = function() {
    console.log('foo');
}

beta();

var beta = function() {
    console.log('bar');
}
