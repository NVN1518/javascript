var listingPrice=7879;
var selllingPrice=800;

var discountPercentage=((listingPrice-selllingPrice)/listingPrice)*100

displayDiscountPercentage=Math.round(discountPercentage)

// console.log("The discount percentage is:"+Math.round(discountPercentage))

console.log(displayDiscountPercentage +" %off")

var comparision=listingPrice>selllingPrice
console.log(typeof(comparision))    
// ye hame typebatayega/ kis type ka data h


console.log(typeof(selllingPrice))


