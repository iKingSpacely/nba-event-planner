const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
           name: name.value,
           email: email.value,
           password: password.value 
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to sign up');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);