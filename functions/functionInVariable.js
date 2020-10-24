var roles=function (role, name) {
  switch (role) {
    case "admin":
      return `${name} got alll the access`;
    //   break;

    case "subadmin":
      return `${name} got half/littlebit of the access`;
    //   break;

    case "tetsprep":
      return `${name} will delete/modify the testseries`;
    //   break;

    case "co-prdinator":
      return `${name} got all the supervision`;
    //   break;

    case "user":
      return `${name} can consume all the data`;
    //   break;

    default:
      return "invalid input";
    //   break;
  }
}


console.log(roles("user","naveen"));




sayhello()


function sayhello(){
    console.log("hello people");
}



