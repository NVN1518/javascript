const items=[
    {name:"bike", price:2325},
    {name:"car", price:9529},
    {name:"truck", price:5699},
    {name:"atv", price:4558},
    {name:"jahaj", price:5668},
    {name:"scooty", price:5458},
    {name:"tractor", price:6668},
    {name:"scorpio", price:9668},

]

// console.log(items);
// console.log(items[2]);
var filteredItems=items.filter((item)=>{return item.price <=5000});
console.log(filteredItems);