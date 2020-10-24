var user={
    name:"monu",
    age:23,
    qualification:'btech',
    role:'coder',
    loginCount:56,
    courselist:[],
    isVerified:{
        google:true,
        fb:false,
        instagram:true,
        twitter:'yes'
    },
    buyCourse:function(courseName){
        this.courselist.push(courseName);


    },
    getCourseCount:function(){
        return `${this.name} is enrolled in ${this.courselist.length} courses`;
    }
    
        


}


user.buyCourse("react js");
user.buyCourse("react js");
console.log(user.getCourseCount());
// console.log(user.isVerified.google);