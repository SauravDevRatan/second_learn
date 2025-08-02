let h1=document.querySelector("h1");
h1.addEventListener("mouseenter",()=>{
    h1.style.background=`rgb(${num()},${num()},${num()})`;
    h1.style.color=`rgb(${num()},${num()},${num()})`;
})
 function num(){
    let n=Math.floor(Math.random()*256);
    return n;
 }