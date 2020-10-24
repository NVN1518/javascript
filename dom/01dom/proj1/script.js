var counter = document.querySelector(".counter");
var follower = document.querySelector(".followers");

let count=0;
setInterval(() => {
   if (count < 1000) {
       count++;
       counter.innerHTML = count;

   }
},1)



setTimeout(() => {
    follower.innerHTML = "congrats on acheiving 1000 followers on instagram!";

},5500);