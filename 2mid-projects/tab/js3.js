function changeTab(pageId){
    let content = document.querySelectorAll('[data-page-content]');
    content.forEach(function(pages){
        pages.classList.add('hidden');
    })

    let pagess = document.getElementById(pageId);
    pagess.classList.remove('hidden');
}