//making class

class student{
    constructor(prn){
        console.log("Constructor is Called");
        this.prn = prn
    }
    rollNumber = "009" ;

    getPRN(){
        
        console.log("11231");
    }
}

let student1 = new student("93300") ; 
let student2 = new student("94400") ; 

console.log(student1.getPRN());
