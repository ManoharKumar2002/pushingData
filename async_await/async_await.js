async function data(val){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        console.log("This is Async function !",val);
            resolve(200);
        },3000)
    })
}
async function secondData(val){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        console.log("This is Async function !",val);
            resolve(200);
        },3000)
    })
}

// async function getData(){
//     console.log('fetching data1 .....');
//     await data(100) ; // 1st call 
//     console.log('fetching data2 .....');
//     await secondData(200) ; // 2nd call 
//     console.log('fetching data3 .....');
//     await data(300) ; // 3rd call 
// }

// IIFE function 
(
    async function getData(){
            console.log('fetching data1 .....');
            await data(100) ; // 1st call 
            console.log('fetching data2 .....');
            await secondData(200) ; // 2nd call 
            console.log('fetching data3 .....');
            await data(300) ; // 3rd call 
        }
)();

console.log("Last code ")
