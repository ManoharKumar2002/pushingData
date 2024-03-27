// let data = new Promise ((resolve,reject) =>{
//     console.log("Data of Promise !");
//     resolve("success");
// });

// let data = ()=>{
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Promise is working !");
//             // resolve("success");
//             reject("Erro");
//         },10000)
//     })
// } 


// let promiseData = () => {
//     return new Promise ((resolve , reject) =>{
//         setTimeout(()=>{
//             console.log("promise Data ");
//                 // resolve("success");
//                  reject("No Internet Connection !");
//         },5000);      
//     })
// }

// let promise = promiseData() ;

// promise.then((res)=>{
//     console.log("Promise fulfilled !",res);
// })

// promise.catch((err)=>{
//         console.log("Promise rejected !",err);
// })


let asyncFun1 = () => {
    return new Promise ((resolve , reject) =>{
        setTimeout(()=>{
            console.log("Async Function Data1 .....");
            resolve("success");
        },3000)
    })
}
let asyncFun2 = () => {
    return new Promise ((resolve , reject) =>{
        setTimeout(()=>{
            console.log("Async Function data2 .....");
            resolve("success");
        },3000)
    })
}
console.log("fetching data1 ....");

asyncFun1().then((val)=>{
    console.log(val);
console.log("fetching data2 ....");
    return asyncFun2();
})
.then((res)=>{
    console.log(res);
    console.log("fetching again data1 ...");
    return asyncFun1();
})
.then((res)=>{
    console.log(res);
})



// console.log("fetching data1 ....");
// asyncFun1().then((res)=>{
//     console.log("AsynFun2 ",res);

//     console.log("fetching data2 ....");

//     asyncFun2().then((res)=>{
//         console.log("AsynFun2 ",res);
//     })
// })

// console.log("fetching data1 ....");
// let p1 = asyncFun1();
// p1.then((resValue)=>{
//     console.log("success");
//     console.log("fetching data2 ....");
//     let p2 = asyncFun2();
//     p2.then(()=>{
//         console.log("success");
//     })
// })



// console.log("fetching data2 ....");
// let p2 = asyncFun2();
// p2.then((resValue)=>{
//     console.log(resValue);
// })