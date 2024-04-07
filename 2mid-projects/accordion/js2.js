
const hidden = document.querySelectorAll('[data-name="acordeon"]');

hidden.forEach( (item) => {
    item.onclick = () => {
        item.nextElementSibling.classList.toggle('hidden')
    }
})