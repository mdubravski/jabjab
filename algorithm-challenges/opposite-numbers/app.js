/**
 * 
 * functions for getting the opposite of a number
 * 
 */

function getOpposite1(num){
    if(num > 0){
        return -num;
    }else if(num < 0){
        return Math.abs(num);
    }else{
        return 0;
    }
}

function getOpposite2(num){
    return -num;
}

console.log(getOpposite2(10));
console.log(getOpposite2(-99));
console.log(getOpposite2(0));