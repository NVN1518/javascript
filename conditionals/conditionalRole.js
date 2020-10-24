var user="testprep";

switch (user) {
    case "admin":
        console.log("you get the full access");
        break;

    case "testprep":
        console.log("you get acccess to create/delete testprep");
        break;
    case "subadmin":
        console.log("you get the half access");
        break;
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("kuch b likhega kya be");
        break;
}