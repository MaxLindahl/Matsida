
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
let today = new Date(); //for sell and bad date //timezone?

let user = "Max"; //temp user
let item = "Vattenmelon"; //temp item
let sell_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //make sure to update?
let bad_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+10); //make more complex calulcation to account for month shifts

document.querySelector('#kop-btn').onclick = () => {
    let headers = new Headers();

    let myRequest = new Request('http://localhost:8080/sql/add?user='+user+'&item='+item+'&sell_date='+sell_date+'&bad_date='+bad_date, {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
      });
    fetch(myRequest)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        else {
            console.log("Item successfully bought!");
        }
    });
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

