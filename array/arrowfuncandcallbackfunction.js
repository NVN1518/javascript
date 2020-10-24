var isEve=function (element) {
    if (element%2===0){
        return true;
    }else{
        return false;
    }

    return element%2===0;
    
}
// console.log(isEve(6163));




// var isEve= (element)=> {
    // if (element%2===0){
    //     return true;
    // }else{
    //     return false;
    // }

    //  return element%2===0;
    
// }
// console.log(isEve(616));


var sannu=[4,6,8,6].every(isEve);
console.log(sannu);



var annu=[21,60,9,03,15,5,9].every((e)=>(e%3===0));
// var anu=[21,60,9,03,15,5,9].every((e)=>{return e%2===0}); agar hame return krni h  value to {} lgane pdenge
console.log(annu);
console.log(anu);