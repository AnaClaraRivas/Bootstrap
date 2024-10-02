document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Pega o destino da âncora
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Verifica se o elemento existe
      if (targetElement) {
        // Calcula a posição com o offset do navbar
        const offsetPosition = targetElement.offsetTop - 70; // Substitua 70 pela altura do seu navbar

        // Scroll suave para o destino
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


