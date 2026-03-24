document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.avatar-wrap');
  const name = document.querySelector('.artist-name');
  const tagline = document.querySelector('.tagline');
  const buttons = document.querySelectorAll('.link-btn');
  const footer = document.querySelector('.footer');

  // Staggered entrance
  requestAnimationFrame(() => {
    avatar?.classList.add('visible');
    name?.classList.add('visible');
    tagline?.classList.add('visible');

    buttons.forEach((btn, i) => {
      btn.style.transitionDelay = `${0.35 + i * 0.1}s`;
      btn.classList.add('visible');
    });

    footer?.classList.add('visible');
  });
});
