const carousel = document.querySelector('.hero-carousel');
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 5000); // a cada 5 segundos


  const carrossel = document.getElementById("carrossel");
  const leftBtn = document.querySelector(".btn-nav.left");
  const rightBtn = document.querySelector(".btn-nav.right");

  function scrollLeft() {
    carrossel.scrollBy({ left: -220, behavior: 'smooth' });
  }

  function scrollRight() {
    carrossel.scrollBy({ left: 220, behavior: 'smooth' });
  }

  leftBtn.addEventListener("click", scrollLeft);
  rightBtn.addEventListener("click", scrollRight);

  // Auto-scroll infinito
  setInterval(() => {
    scrollRight();
    if (carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth) {
      carrossel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 4000);
