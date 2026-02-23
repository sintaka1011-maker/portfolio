const faqItems = document.querySelectorAll('.faq-content');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-q');
  
  question.addEventListener('click', () => {
    faqItems.forEach(i=> {
      i.querySelector('.faq-a').classList.remove('is-open');
    });
    item.querySelector('.faq-a').classList.add('is-open');
  });
});
