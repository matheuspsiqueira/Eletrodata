  const contadores = document.querySelectorAll('.contador');

  contadores.forEach(contador => {
    const atualizarContador = () => {
      const target = +contador.getAttribute('data-target');
      const atual = +contador.innerText;

      const incremento = target / 200; // quanto menor o divisor, mais rápido

      if (atual < target) {
        contador.innerText = Math.ceil(atual + incremento);
        setTimeout(atualizarContador, 10);
      } else {
        contador.innerText = target.toLocaleString('pt-BR'); // formata com pontos
      }
    };

    atualizarContador();
  });