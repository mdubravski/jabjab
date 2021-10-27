/**
 * 
 * functions for getting the max of an array
 * 
 */

// using spread operator
function getMax1(list){
    return Math.max(...list);
}

function getMin1(list){
    return Math.min(...list);
}

function getMax2(list){
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if(list[i] >= max){
            max = list[i];
        }
    }
    return max;
}

function getMin2(list){
let min = list[0];
for(let l of list){
    l < min ? min = l : null;
}
return min;
}

let list = [23,54,1,-65,89,204];
console.log(getMin2(list));
console.log(getMax2(list));
;