const uid="abc89898";


var first_name="Naveen";
var last_name="Fogat";
var email="Nvnfogat777@outlook.com";
var password="ajt4561230";
var confirm_pass="ajt4561230";
var country="India";
var state="Rajsthan"
var course_count=45;
var islogged_in_from_google=true;
var islogged_in_from_fb=false;


console.log("My constant uid is:",uid)

console.log(`

        User name is :${first_name+first_name}
        User belongs to :${country + " and state is "+state}
        His authentications crendialts are :${"from fb "+islogged_in_from_fb+" and from google "+islogged_in_from_google}
        user purchase given number of courses:${course_count}
        uses email:${email}
        and his password is:${password}
`)
