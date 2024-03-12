document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var loginMessageBox = document.getElementById('loginMessageBox');

    // Hide the login message box by default
    loginMessageBox.style.display = 'none';

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error in fetching user data.');
                }
                return response.json();
            })
            .then(users => {
                var user = users.find(user => user.username === usernameValue);
                if (user && user.email === passwordValue) {
                    displayMessage('success', 'Login Successful!');
                } else {
                    displayMessage('error', 'Invalid username or password. Please try again.');
                }
            })
            .catch(error => {
                displayMessage('error', error.message);
            });
    });

    // Function to display messages
    function displayMessage(type, message) {
        var messageParagraph = loginMessageBox.querySelector('p');
        messageParagraph.textContent = message;
        loginMessageBox.className = 'message-box message-' + type;

        // Display the message box
        loginMessageBox.style.display = 'block';
    }
});
