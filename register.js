
const API_BASE_URL = 'http://localhost:5000/api';

// Wait for DOM, then wire the forms
document.addEventListener('DOMContentLoaded', () => {
  // Note: In the HTML:
  // .sign-up-container = LOGIN form
  // .sign-in-container = SIGN UP (Create Account) form

  const loginForm = document.querySelector('.sign-up-container form'); // This is the login form
  const signupForm = document.querySelector('.sign-in-container form'); // This is the signup form

  // Sign-up form handler (Create Account)
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = signupForm.querySelector('input[name="name"]');
      const emailInput = signupForm.querySelector('input[type="email"]');
      const passwordInput = signupForm.querySelector('input[name="password"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';

      // Basic validation
      if (!email || !password || !name) {
        alert('Please fill in all fields');
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert('Account created successfully! Please log in.');
          // Store token
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          // Clear form
          signupForm.reset();
          console.log('User registered:', data.user);
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Signup error:', error);
        alert('Failed to create account. Make sure the server is running on localhost:5000');
      }
    });
  }

  // Login form handler
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const emailInput = loginForm.querySelector('input[type="email"]');
      const passwordInput = loginForm.querySelector('input[name="password"]');

      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';

      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert('Login successful!');
          // Store token
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          loginForm.reset();
          console.log('User logged in:', data.user);
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Failed to log in. Make sure the server is running on localhost:5000');
      }
    });
  }
});