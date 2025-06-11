const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    // Optional: Close other answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.classList.remove('open');
    });

    // Toggle current answer
    if (!isOpen) {
      answer.classList.add('open');
    }
  });
});
