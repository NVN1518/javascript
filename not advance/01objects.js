var User = function (firstname, coursecount) {
    this.firstname = firstname;
    this.coursecount = coursecount;
    this.getcoursecount = function () {
        console.log(`the total number of courses is ${this.coursecount}`);
    }
};


var hitesh = new User("naveen", 2);
// console.log(hitesh);


User.prototype.getfirstname = function () {
    console.log(`the first name is ${this.firstname}`);

}


// if (hitesh.hasOwnProperty("firstname")) {
//     hitesh.getfirstname();

// };

const san = new User("sanjay", 12);
console.log(san.getcoursecount());

console.log(san.firstname);