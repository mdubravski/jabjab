/**
 * (IFFE) Immediatly Invoked Function Expressions
 *      - function will run immediately from declaration
 *      - can use IFFE to avoid poluting the global scope
 *          - not good practice to have variables on global scope
 */

// ES5

// IFFE
(function greeting() {
    console.log('Hello!');
})();

// IFFE
(function () {
    console.log('You dont have to name IFFEs!');
})();

var a = 'a'; // in global scope
function add(a, b) { // in global scope
    return a + b;
}

// IFFE in its own scope, not in global scope
(function () {
    var b = 'b';

    function add(a, b) {
        return a + b;
    }
})();

// IFFE with args
(function(alias, target) {
    console.log(alias,target);
})('foo','bar')

// IFFE can also be used from importing dependices and not cluttering global scope
import jQuery from './js/jquery.min.js';
import UnderScore from './js/UnderScore.min.js';
(function($, _) {
    let bodyEl = $('body');
})(jQuery);

// ES6

// IFFE
{
    let c = 'c';
    let add = function(a,b){
        return a+b;
    }
}


