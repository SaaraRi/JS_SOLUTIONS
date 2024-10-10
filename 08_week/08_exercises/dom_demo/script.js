const backToTop = document.querySelector("#backTopBtn");
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul')
const modalButton = document.querySelector('#mobBtn')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.closeButton')

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('header').style.backgroundColor = "aliceblue";
  } else {
    document.querySelector('header').style.backgroundColor = "transparent";
  }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive')
}

const toggleModal = () => {
    overlay.classList.toggle('visible')
    console.log('asdasdad');
    
}

mobButton.addEventListener('click', toggleMenu);
modalButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
/* overlay.addEventListener('click', toggleModal); */