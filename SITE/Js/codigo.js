let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove a classe 'active' de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Avança para o próximo slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Exibe o slide atual e marca o ponto correspondente como 'active'
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Chama recursivamente a função após 2 segundos
  setTimeout(showSlides, 2000);
}

// Adiciona um ouvinte de evento de clique para cada ponto
document.querySelectorAll('.dot').forEach(function(dot) {
  dot.addEventListener('click', function() {
      // Obtém o número do slide associado ao ponto
      var slideIndex = parseInt(this.getAttribute('data-slide'));

      // Chama a função para mostrar o slide correspondente
      showSlide(slideIndex);
  });
});
