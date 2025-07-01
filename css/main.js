document.addEventListener('DOMContentLoaded', () => {
  // Fade-in inicial del body
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1s';

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Modal para imágenes
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgInModal');
  const closeBtn = modal.querySelector('.close'); // buscar dentro del modal

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll('.expandable-img').forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        modal.classList.add('show');  // mostrar modal con clase CSS
        closeBtn.focus();
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show'); // ocultar modal
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('show'); // ocultar modal al clicar fuera de la imagen
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show'); // ocultar modal con ESC
      }
    });
  }
});

window.addEventListener('load', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.classList.add('fade-in');

    section.addEventListener('animationend', () => {
      section.classList.remove('fade-in');
    }, { once: true });
  });
});

// Parallax scroll
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.body.style.backgroundPosition = `center ${y * 0.3}px`;
});
document.addEventListener('DOMContentLoaded', () => {
  // Modal para video
  const videoModal = document.getElementById('videoModal');
  const videoInModal = videoModal.querySelector('video');
  const videoCloseBtn = videoModal.querySelector('.close');

  if (videoModal && videoInModal && videoCloseBtn) {
    document.querySelectorAll('.expandable-video').forEach(video => {
      video.addEventListener('click', () => {
        // Obtener la fuente del video original
        const source = video.querySelector('source').src;
        // Cambiar la fuente del video dentro del modal
        videoInModal.querySelector('source').src = source;
        videoInModal.load(); // recargar video
        videoModal.classList.add('show');
        videoCloseBtn.focus();
      });
    });

    videoCloseBtn.addEventListener('click', () => {
      videoInModal.pause();
      videoModal.classList.remove('show');
    });

    videoModal.addEventListener('click', e => {
      if (e.target === videoModal) {
        videoInModal.pause();
        videoModal.classList.remove('show');
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && videoModal.classList.contains('show')) {
        videoInModal.pause();
        videoModal.classList.remove('show');
      }
    });
  }
});

