class school {
    schoolName = "LCS School" ;

    message (){
        console.log("The first Indian School !");
    }
}

class student extends school {

}

let student1 = new school ; // object of school class 
let student2 = new student ; // object of student class 


//make class object of humans 

class humans {
    constructor(age){
        console.log("Enter Parent class");
        this.age = age ;
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Eating");
    }
}

class male extends humans{
    constructor(age){
        console.log("Enter child class");
        super(age) // to invoke parent class 
        this.age = age ; 
        console.log("Exit Child")
    }
    gender(){
        super.sleep();
        console.log("Male");
    }
}


let objMale = new male(29) ;
let objHumans = new humans ;


// Practice 
let Data = "new Data" ;
class user{
    constructor(name , email){
        this.name = name ;
        this.email = email ;
    }

    viewData(){
        console.log("Data :",Data);
    }
}


let std1 = new user("Manohar","abc@gmail.com") ;
let std2 = new user("Rahul","xyz@gmail.com") ;

// admin class
class Admin{
    editData(){
        console.log("Allowed to editData") ;
    }
}


let Admin1 = new Admin();