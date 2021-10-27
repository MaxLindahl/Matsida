document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

document.querySelector('.ChangePage').addEventListener('click', () => {
    document.location.replace("homebuy.html");
});