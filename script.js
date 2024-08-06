document.addEventListener('DOMContentLoaded', function () {

    let menu = document.querySelector('#nav-menu');
    let close = document.querySelector('#menu-close');
    let nav_bar2 = document.querySelector('.nav-bar2');


    menu.addEventListener('click', function () {
        nav_bar2.classList.remove("hide");
        nav_bar2.classList.add("show");
        close.style.display = 'block';
        nav_bar2.style.display = 'block';
    })

    close.addEventListener('click', function () {
        nav_bar2.classList.remove("show");
        nav_bar2.classList.add("hide");
        close.style.display = 'none';

        setTimeout(() => {
            nav_bar2.style.display = 'none';
        }, 1000);
    })

})