function closeWindows(a, b, c){
    a.classList.remove('active');
    b.classList.remove('active');
    c.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    closeWindows(shoppingCart, loginForm, navbar);
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    closeWindows(searchForm, loginForm, navbar);
}

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    closeWindows(searchForm, shoppingCart, navbar);
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    closeWindows(searchForm, shoppingCart, loginForm);
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}