const emoji1 = document.getElementById("1");
const emoji2 = document.getElementById("2");

emoji1.addEventListener("click",(e)=>{
    if(e.target == emoji1){
        emoji1.classList.toggle('off');
        emoji2.classList.toggle('off');
    }
});

emoji2.addEventListener("click",(e)=>{
    if(e.target == emoji2){
        emoji1.classList.toggle('off');
        emoji2.classList.toggle('off');
    }
});

