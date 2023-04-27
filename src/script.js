let headerDiv = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
            headerDiv.classList.add('header-cng');
        } else {
            headerDiv.classList.remove('header-cng');
        }
});

const headerCollapseDiv = document.getElementById('header-collapse');
const headerShowBtn = document.getElementById('header-show-btn');
const headerCloseBtn = document.getElementById('header-close-btn');

headerShowBtn.addEventListener('click', () => {
    headerCollapseDiv.classList.add('header-collapse-rmw');
});

headerCloseBtn.addEventListener('click', () => {
    headerCollapseDiv.classList.remove('header-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "header-show-btn" && e.target.parentElement.id != "header-show-btn"){
        headerCollapseDiv.classList.remove('header-collapse-rmw');
    }
});


