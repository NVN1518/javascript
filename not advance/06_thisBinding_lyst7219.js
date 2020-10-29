// const hitesh = {
//   firstName: "Hitesh",
//   lastName: "Choudhary",
//   role: "Admin",
//   courseCount: 3,
//   getInfo: function () {
//     console.log(`
//         First name is ${this.firstName}
//         Last name is ${this.lastName}
//         His role is ${this.role}
//         and he is studying ${this.courseCount} courses
//         `);
//   },
// };

// const dj = {
//   firstName: "Rock",
//   lastName: "DJ",
//   role: "Sub-Admin",
//   courseCount: 4,
// };

// hitesh.getInfo();
// dj.getInfo();

// var djInfo = hitesh.getInfo.bind(dj);
// djInfo();

// hitesh.getInfo.call(dj);























const naam={
  fn:"naveen singh",
  ls:"hello world",
  age:23,
  occupation:"programmer",
  alllinfo:function () {
    console.log(`hello how are you man ${this.fn} and ${this.ls} ${this.age} ${this.occupation}`);
  }
};


naam.alllinfo()





var sannu={
  fn:"jai sannu annu",
  ls:"fogat",
  age:12,
  occupation:"bache",
}


naam.alllinfo.call(sannu)