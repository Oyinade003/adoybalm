const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const closemenu = document.querySelector('.close-menu');

menu_btn.addEventListener('click', function () {
    console.log('Added');
    mobile_menu.classList.toggle('is-active');
    console.log('Switched');
});

closemenu.addEventListener('click', function(){
    mobile_menu.classList.toggle("is-active");
    console.log('Removed');
  });