//JS do Slider

let slideIndex = 0; // Slide atual
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.querySelector(".pagination");
let slideInterval = null; //para armazenar o intervalo

function showSlides(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  Array.from(slides).forEach(slide => slide.style.display = "none");
  
  slides[slideIndex].style.display = "block";
  
  // Atualiza os pontos de paginação
  updateDots(slideIndex);
}

function addDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      showSlides(slideIndex = i);
    });
    dotsContainer.appendChild(dot);
  }
}

// Atualização das imagens do sliders
function updateDots(n) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.style.backgroundColor = "#bbb"); // Cor padrão
  dots[n].style.backgroundColor = "#020087"; // Cor ativa
}

function moveToNextSlide() {
  showSlides(++slideIndex);
}

document.querySelector(".btn-prev").addEventListener("click", () => {
  showSlides(--slideIndex);
  resetSlideInterval();
});

document.querySelector(".btn-next").addEventListener("click", () => {
  showSlides(++slideIndex);
  resetSlideInterval();
});

function startSlideShow() {
  slideInterval = setInterval(moveToNextSlide, 3000); // Muda de slide a 3 segundos
}

function resetSlideInterval() {
  clearInterval(slideInterval); // Limpa o intervalo existente
  startSlideShow(); // Inicia o slideshow novamente
}

addDots();
startSlideShow(); // Inicia o slideshow quando a página carrega
showSlides(slideIndex); // Mostra o primeiro slide



 // JS do submenu 

function toggleDropdown(id) {
  var submenu = document.getElementById(id);
  var isDisplayed = submenu.style.display === 'block';
  // Logica que esconde todos os submenus
  var submenus = document.getElementsByClassName('submenu');
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = 'none';
  }
  //Logica que mostra o submenu clicado, se ele já não estiver visível
  if (!isDisplayed) {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
}

//  Esconde os submenus quando clicar fora deles
window.onclick = function(event) {
  if (!event.target.matches('.menu-item a')) {
    var submenus = document.getElementsByClassName("submenu");
    for (var i = 0; i < submenus.length; i++) {
      var openDropdown = submenus[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

