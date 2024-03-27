// // Asynchromic 

// console.log("First");
// console.log("Second");

// setTimeout(()=>{
//     console.log("Set Timeout");
// },3000)

// console.log("Third");
// console.log("Fourth");


// synchromic 

function getData(data , nextData){
    setTimeout(()=>{
        console.log(data);
        if(nextData ){
            nextData() ;
        }
    },2000)
}

// callback hell 
getData("data1",()=>{
    getData("data2",()=>{
        getData("data3",()=>{
            getData("data4")
        });
    });
});