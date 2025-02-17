// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the data to a server or process it as needed
    // For now, we'll just show an alert
    alert(Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message});

    // Clear the form fields
    document.getElementById('contact-form').reset();
});