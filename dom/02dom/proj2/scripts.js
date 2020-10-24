const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(cyan).backgroundColor);


const getbgColor= (element) => {
   return window.getComputedStyle(element).backgroundColor

}


// const color=getbgColor(pink);



red.addEventListener('click',() =>{
    center.style.background=color
});



const magicColor=(element,color) => {
    element.addEventListener('mouseenter',() =>{
        center.style.background=color
    });

}


magicColor(violet,getbgColor(cyan));
magicColor(pink,getbgColor(violet));
magicColor(red,getbgColor(orange));
magicColor(orange,getbgColor(red));
magicColor(cyan,getbgColor(pink));














