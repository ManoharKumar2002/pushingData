const user = {
    userName : "Manohar Kumar",
    password : "12345678" ,
    // methods
    
    getPassword : function(){
        console.log("Password : ",this.password); // user.password
    }

}


const employee = {
    getTax(){
        console.log("Your tax is 10%");
    },
    salary : "100000" ,
}

const Rahul = {
    Mobile : "933420" ,
}
const Mohan = {
    Mobile : "933420" ,
}
const Ram = {
    Mobile : "933420" ,
}

Rahul.__proto__ = employee ;
Mohan.__proto__ = employee ;
Ram.__proto__ = employee ;


