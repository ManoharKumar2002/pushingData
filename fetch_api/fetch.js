let URL = "https://cat-fact.herokuapp.com/facts" ;
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
// let data ;

let  data ;
let getData = async () => {
    let response = await fetch(URL);
    return await response.json();
}

let fetchData = async () =>{
    let data = await getData() ;
    text.innerText = data[0].text ;
}

btn.addEventListener('click',fetchData);