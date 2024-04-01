// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalCloseButton = document.querySelectorAll('[data-modal-close]');

// // Кнопки - открыть модалки
// modalButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modalId = this.dataset.modalButton;
//         const modal = document.querySelector("#" + modalId);
//         modal.classList.remove('hidden');
//     });
// })

// // Кнопки - закрыть модалки
// modalCloseButton.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modal = this.closest('[data-modal]');
//         modal.classList.add('hidden');
//     });
// })

2
// const modalButtons = document.querySelectorAll("[data-modal-button]");
// const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

// modalButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modalId = this.dataset.modalButton;
//         const modal = document.querySelector('#' + modalId);
//         modal.classList.remove('hidden')
//     })
// })    
//     modalCloseButtons.forEach(function(item){
//         item.addEventListener('click',function(){
//             const modal = this.closest('[data-modal]');
//             modal.classList.add('hidden')
//         })
// })

3
// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// modalButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modalId = this.dataset.modalButton;
//         const modal = document.querySelector('#' + modalId);
//         modal.classList.remove('hidden');
//     })
// })

// modalCloseButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modal = this.closest('[data-modal]');
//         modal.classList.add('hidden');
//     })
// })

4
// const modalButtons =  document.querySelectorAll('[data-modal-button]');
// const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// modalButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modalId = this.dataset.modalButton;
//         const modal = document.querySelector('#'+ modalId);
//         modal.classList.remove('hidden');
//     })
// })    
// modalCloseButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modal = this.closest('[data-modal]');
//         modal.classList.add('hidden');
//     })
// })    

5
// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// modalButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modalId = this.dataset.modalButton;
//         const modal = document.querySelector('#' + modalId);
//         modal.classList.remove('hidden');
//     })
// })

// modalCloseButtons.forEach(function(item){
//     item.addEventListener('click',function(){
//         const modal = this.closest('[data-modal]');
//         modal.classList.add('hidden');
//     })
// })

6
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalСloseButtons = document.querySelectorAll('[data-modal-close]');

modalButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
    })
})

modalСloseButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden')
    })
})