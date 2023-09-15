const  left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allimages = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom")
let sliderNumber = 1;
const length = allimages.length;



//buttom part botton 

for(let i = 0; i < length; i++){
    const div = document.createElement("div")
    div.className = "btn";
    bottom.appendChild(div)
}
//selecting bottons 
const buttons = document.querySelectorAll(".btn");


const resetBg = () => {
    buttons.forEach(btn =>{
        btn.style.backgroundColor = "transparent"
    })
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click",() =>{
        resetBg()
        slider.style.transform = `translatex(-${i * 200}px)`;
        sliderNumber = i+1;
        btn.style.backgroundColor = "black";
    });
})

// for back ground color changing creating a function 
const changeColor = () =>{
    resetBg()
    buttons[sliderNumber-1].style.backgroundColor = "black";

}



 //right side of the errow mark responssive

const nextSlide = () => {
    slider.style.transform =`translateX(-${sliderNumber * 200}px)`;  
    sliderNumber++; 
}
const firstSlide = () => {
    slider.style.transform =`translateX(0px)`; 
    sliderNumber = 1;
}
right.addEventListener("click",() => {
  sliderNumber < length ? nextSlide():firstSlide()
  changeColor()
});

//left side of the errow mark responssive
const preSlide = () => {
    slider.style.transform =`translateX(-${(sliderNumber-2) * 200}px)`;  
    sliderNumber--; 
}
const lastSlide = () => {
    slider.style.transform =`translateX(-${(length-1) * 200}px)`;
    sliderNumber= length;    
}

left.addEventListener("click", () => {
    sliderNumber > 1 ? preSlide() : lastSlide()
    changeColor()
});


