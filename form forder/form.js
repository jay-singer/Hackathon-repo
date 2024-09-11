document.getElementById('customForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Please fill in all required fields.');
    } else {
      alert('Form submitted successfully!');
    }
  });
  