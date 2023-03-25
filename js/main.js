let menuBtn = document.querySelector('.burger_menu');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav_link');
let menuId = document.getElementById("nav")

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})
