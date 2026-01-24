const ctaBtn = document.querySelector('.cta-btn');
const defaultText = ctaBtn.textContent;

ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  ctaBtn.classList.add('is-disabled');
  ctaBtn.textContent = '送信中. . .';

  setTimeout(() => {
    ctaBtn.classList.remove('is-disabled');
    ctaBtn.textContent = defaultText;
  }, 2000);
});
