/**
 * 
 * functions for who likes it
 * 
 */

function likes1(names){
    if(names.length > 3){
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`;
    }else if(names.length === 1){
        return `${names[0]} likes this`;
    }else{
        return "no one likes this";
    }
}

function likes2(names){
    switch(names.length){
        case 0:
            return `no one likes this`;
            break;
        case 1:
            return `${names[0]} likes this`;
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
            break;
    }
}


console.log(likes1(["michael"]));
console.log(likes2(["michael", "biz", "foo", "bar"]));