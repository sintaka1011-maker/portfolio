const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', (e) => {
  ctaBtn.classList.add('is-disabled');
  ctaBtn.textContent = '送信中. . .';

  setTimeout(() => {
   e.preventDefault();
  }, 2000);
});
