// script.js
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var messageBox = document.createElement('div');
    var messageText = document.createElement('p');

    // Style the message box
    messageBox.style.border = '2px solid #f9f9f9';
    messageBox.style.backgroundColor = '#f9f9f9';
    messageBox.style.padding = '10px';
    messageBox.style.margin = '20px';

    // Append the message text to the message box
    messageBox.appendChild(messageText);

    // Append the message box to the document body
    document.body.appendChild(messageBox);

    // Handle form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Make API call to fetch user data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Unable to fetch user data');
                }
                return response.json();
            })
            .then(function (data) {
                // Validate username and password
                var isValid = data.some(function (user) {
                    return user.name === username && user.email === password;
                });

                // Display appropriate message
                if (isValid) {
                    messageText.textContent = 'Login successful!';
                    messageBox.style.borderColor = 'green';
                } else {
                    messageText.textContent = 'Invalid username or password.';
                    messageBox.style.borderColor = 'red';
                }
            })
            .catch(function (error) {
                alert('Error: ' + error.message);
            });
    });
});
