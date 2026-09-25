let imagens=[
    "./src/assets/capa.png",
    "./src/assets/dlc.png",
    "./src/assets/calice.png",
];

let index=0;

let tempo = 3000; 


function SlideShow(){

    document.getElementById("imgBanner").src=imagens[index];

    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("SlideShow()",tempo)
}
//EXECUTAR A FUNÇÃO
SlideShow();
const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})
