const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', (e) => {
  if(ctaBtn.classList.contains('is-disabled')) {
    e.preventDefault();
    return;
  }

  ctaBtn.classList.add('is-disabled');
  ctaBtn.textContent = '送信中. . .';
});
