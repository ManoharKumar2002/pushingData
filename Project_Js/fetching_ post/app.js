const URL = "https://api.quotable.io/random";
const btn = document.querySelector("button")

btn.addEventListener("click", async ()=>{
    let data = await getData();
    let content = data.content ;
    let author = data.author ;
    console.log(content.length)
    if(content.length < 80){
    let card = document.createElement("div");
    let para = document.createElement("p");
    let tittle = document.createElement("h1");
    document.body.append(card);
    card.append(para);
    card.append(tittle);
    para.innerText = `“  ${content} ”` ;
    tittle.innerText = `-${author}` ;
    }
    else{
        alert("Try again ...")
    }
})


const getData = async ()=>{
    let response = await fetch(URL) ;
    let data = await response.json();
    return data ; 
}
