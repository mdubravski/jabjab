/**
 * 
 *  functions for checking of the number of x's and o's in a stirng are equal
 * 
 */

 function XO(str) {
    let numX = 0;
    let numO = 0;
    str = str.toLowerCase();

    for(let s of str){
      switch(s){
          case "x":
                numX++;
                break;
          case "o":
                numO++;
                break;
          default:
                break;
      }
    }
    if(numX === numO){
        return true;
      }
      return false;
  }

  function XO1(str){
    let numX = 0;
    let numO = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x"){
            numX++;
        }
        if(str[i] === "o"){
            numO++;
        }
    }
    if(numX === numO){
        return true;
    }
    return false;
  }

  function XO2(str){
      str = str.toLowerCase().split("");
      return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

  function XO3(str){

  }
  
  console.log(XO("aaaDDxxXasfdsOOo"));
  console.log(XO1("aaaDDxxXasfdsOOo"));
  console.log(XO2("aaaDDxXasfdsOOo"));
  console.log(XO3("aaaDDxXasfdsOOo"));