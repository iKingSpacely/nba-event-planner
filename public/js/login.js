const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const name = document.querySelector('#name-signup');
  //   const email = document.querySelector('#email-signup');
  //   const password = document.querySelector('#password-signup');
  
  //   if (name && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //          name: name.value,
  //          email: email.value,
  //          password: password.value 
  //       }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to sign up');
  //     }
  //   }
  // };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);
  