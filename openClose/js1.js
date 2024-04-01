// const first = document.querySelector('button');
// const second = document.querySelector('.hide');

// first.addEventListener('click',function(){
//     second.classList.toggle('hide');
//     if(second.classList.contains('hide')){
//         first.textContent = 'open';
//     }
//     else{
//         first.textContent = 'close';
//     }
// })

2
// const first = document.querySelector('button');
// const second = document.querySelector('.hide');

// first.addEventListener('click',function(){
//     second.classList.toggle('hide');
//     if(second.classList.contains('hide')){
//         first.textContent = 'open';
//     }
//     else{
//         first.textContent = 'close';
//     }
// })

3
const first = document.querySelector('button');
const second = document.querySelector('.hide');

first.addEventListener('click',function(){
    second.classList.toggle('hide');
    if(second.classList.contains('hide')){
        first.textContent = 'open';
    }
    else{
        first.textContent  = 'close';
    }
})