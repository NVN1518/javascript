var cars = ['bmw',
    'merc',
    'audi',
    'tvr',
    'honda',
    'hyundai',
    'suzuki'
];


var i = 0;
for (;;) {
    if (i > 3) break;
    console.log(i);
    i++;


}

cars.forEach((c)=>(console.log(c)));