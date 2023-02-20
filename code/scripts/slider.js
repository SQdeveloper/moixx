const sliderMove = document.querySelector(".sliderMove");
const box        = document.querySelectorAll(".sliderMove .box");
const buttons    = document.querySelectorAll(".home button");
let number       = 0;
let stv, position = 0 ;

function restartStyleButton(i) {
    buttons.forEach(b=>{
        b.style.background = "transparent";
    });
    buttons[i].style.background = "white";
}

buttons.forEach((bt, index)=>{
    bt.addEventListener("click", ()=>{
        clearInterval(stv);
        sliderMove.style.transition = "transform 1s";
        move(index);
        restartStyleButton(index);
    });
});

function startInterval () {
    stv = setInterval(()=>{
        let firstBox = document.querySelector(".sliderMove .box");
        sliderMove.style.transition = "transform 1s";
        sliderMove.style.transform = `translateX(-${200/3}%)`;
        position++;
        restartStyleButton(position);
        position === 2 ? position = -1 : null;
        setTimeout(()=>{
            sliderMove.style.transition = "none";
            sliderMove.insertAdjacentElement("beforeend", firstBox);
            sliderMove.style.transform = "translateX(calc(-100%/3))"
        }, 1000);
    }, 3000);
}

function move(i) {
    sliderMove.style.transform = `translateX(-${100/3 * i}%)`;
}

startInterval();