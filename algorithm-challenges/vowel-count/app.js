/**
 * 
 *  count the number of vowels in a given string
 * 
 */

 let s = "Hi how are you today?";
 s = s.toLowerCase();
 arr = s.split("");
 letters = s.split("");
 var count = 0;
 
 for(let i = 0; i < letters.length; i++){
    
     switch(letters[i]){
        case 'a':
            count++;
            break;
        case 'e':
            count++;
            break;
            case 'i':
            count++;
            break;
        case 'o':
            count++;
            break;
        case 'u':
            count++;
            break;
        default:
            break;
     }

 }

console.log('# of vowels:',count);