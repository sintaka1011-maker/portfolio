const faqItems = document.querySelectorAll('.faq-content');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  
  question.addEventListener('click', () => {
    item.classList.toggle('open');
    answer.classList.toggle('is-open');
  });
});
