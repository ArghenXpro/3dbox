let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slides = document.querySelectorAll("img");
let i=0;

right.addEventListener('click',function(){
    ++i
    if(i >= slides.length){
        slides[i-1].classList.remove("block");
        i=0;
        slides[i].classList.add("block");
    }
    else{
        slides[i-1].classList.remove("block");
        slides[i].classList.add("block");
    }
})

left.addEventListener('click',function(){
    --i
    if(i < 0){
        slides[i+1].classList.remove("block");
        i=4;
        slides[i].classList.add("block");
    }
    else{
        slides[i+1].classList.remove("block");
        slides[i].classList.add("block");
    }

})

// const speed = document.getElementById("js5");
// setInterval(function(){speed.className+="img"},1000)

$('#myCarousel').on('slide.bs.carousel', function () {
    $('.carousel').carousel({
        interval: 1000
      })
  })