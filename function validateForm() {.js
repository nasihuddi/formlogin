function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Reset error message
    errorMessage.style.display = "none";

    // Check if username and password are not empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password must be filled out!";
        errorMessage.style.display = "block";
        return false; // Prevent form submission
    }

    // If both fields are filled, simulate successful login (for now)
    alert("Login successful!");
    return true;
}
