/**
 * 
 *  functions for squareing every digit of a given number
 *  12345 -> 1491625
 * 
 */

 function squareDigits(num){
    let digits = Array.from(num.toString()).map(Number);
    let ret =[];
    for(let d of digits){
        ret.push(d**2);
    }
    return Number(ret.join(""));
  }

  function squareDigits1(num){
    let digits = num.toString().split("");
    let result = "";

    for(let d of digits){
        result += Math.pow(Number(d),2);
    }
    return Number(result);
  }

  console.log(squareDigits(12345));
  console.log(squareDigits1(12345));