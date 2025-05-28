const carousel = document.querySelector('.hero-carousel');
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 5000); // a cada 5 segundos