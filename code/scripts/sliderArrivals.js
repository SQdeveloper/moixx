const sliderM = document.querySelector(".arrivals .sliderMove");
const arrows  = document.querySelectorAll(".arrivals .arrow");
const barras  = document.querySelectorAll(".arrivals .barras");
let value = 0;

barras.forEach((bar, index)=>{
    bar.addEventListener("click", ()=>{
        // Reiniciando color del borde de las barras
        barras.forEach(b=>{
            b.style.borderColor = "#c9c9c9"
        });
        bar.style.borderColor = "gray";
        // Moviendo slider move
        sliderM.style.transform = `translateX(-${100/12 * index}%)`;
    });
});

// Flecha izquierda
arrows[0].addEventListener("click", ()=>{
    arrows[1].style.opacity = "1";
    arrows[1].style.zIndex = "1";
    value--;
    sliderM.style.transform = `translateX(-${100/12 * value}%)`;
    if(value == 0){
        arrows[0].style.opacity = "0";
        arrows[0].style.zIndex = "-1";
    }
});

// Flecha derecha
arrows[1].addEventListener("click", ()=>{
    arrows[0].style.opacity = "1";
    arrows[0].style.zIndex = "1";
    value++;
    sliderM.style.transform = `translateX(-${100/12 * value}%)`;
    if(value == 8) {
        arrows[1].style.opacity = "0";
        arrows[1].style.zIndex = "-1";
    }
});