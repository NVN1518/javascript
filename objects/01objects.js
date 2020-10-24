var user={
    name:"naveen",
    lastName:'fogat',
    age:23,
    role:'coder',
    goal:'web developer full stack'

}

// console.log(typeof(user));
console.log(user.goal);
user.age=234;
console.log(user.age);

console.log((user["age"]));
console.table(user);
// console.clear(user);