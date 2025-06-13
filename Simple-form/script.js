// If you need to create also error handling and success messages

document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('contactForm');
      const response = document.getElementById('response');

      form.addEventListener('submit', function (event) {
        event.preventDefault(); //don’t want the page to reload on form submission

        const name = document.getElementById('name').value.trim(); //value.trim() removes whitespace from both ends of a string
        const email = document.getElementById('email').value.trim();

        if (!name || !email) { //check if either name or email is missing
          response.textContent = 'Please enter both your name and email.';
          response.className = 'message error';
          return;
        }

        response.textContent = `Thank you, ${name}! Your message has been sent.`;
        response.className = 'message success';
        form.reset(); //reset the form fields after submission
      });
    });
