// Include the CryptoJS library

function checkPassword(hashedPassword) {
    var password = prompt("Please enter the password:");
    if (password === null || password === "") {
        alert("Password is required!");
        window.location.href = "../index.html"; // Redirect to the main page
        return;
    }
    var hash = CryptoJS.SHA256(password).toString();
    if (hash !== hashedPassword) {
        alert("Incorrect password!");
        window.location.href = "../index.html"; // Redirect to the main page
    } else {
        document.getElementById('protected-content').style.display = 'block';
    }
}