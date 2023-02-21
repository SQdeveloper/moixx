const header = document.querySelector("header");
const logo   = document.querySelector("header .logo");
const a      = document.querySelectorAll("header a");
const select = document.querySelector("header select");
const svg    = document.querySelectorAll("header svg");
const menu   = document.querySelector(".menu");
const content= document.querySelector(".content");
const img    = document.querySelector(".menu img");
let flag = true;

// Configuramos el evento click en el bottom menu
menu.addEventListener("click", ()=>{
    content.classList.toggle("active");
    //Activamos el cambio de color del header
    header.classList.toggle("active");
    logo.classList.toggle("active");
    select.classList.toggle("active");
    menu.classList.toggle("active");
    svg[0].classList.toggle("active");
    svg[1].classList.toggle("active");
    a.forEach(item => {
        item.classList.toggle("active");
    })
    if(flag === true){
        img.src = "./rg/svg/x.svg";
        flag = false;
    }else {
        img.src = "./rg/svg/menu.svg";
        flag = true;
    }
});

// Cambiamos el color del fondo del header y de sus hijos cuando hacemos scroll
window.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        header.classList.add("active");
        logo.classList.add("active");
        select.classList.add("active");
        menu.classList.add("active");
        svg[0].classList.add("active");
        svg[1].classList.add("active");
        a.forEach(item => {
            item.classList.add("active");
        })
    }
    else {
        header.classList.remove("active");
        logo.classList.remove("active");
        select.classList.remove("active");
        menu.classList.remove("active");
        svg[0].classList.remove("active");
        svg[1].classList.remove("active");
        a.forEach(item => {
            item.classList.remove("active");
        })
    }
});