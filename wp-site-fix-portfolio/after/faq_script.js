const faqItems = document.querySelectorAll('.faq-content');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  question.addEventListener('click', () => {
    answer.classList.toggle('is-open');
  });
});
