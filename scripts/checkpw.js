// Include the CryptoJS library

function checkPassword(correctHash, showHash, redirectUrl, hashMemoryName) {
    var storedHash = localStorage.getItem(hashMemoryName);
    if (showHash) {
        alert("Stored hash: " + storedHash);
    }
    
    if (storedHash === correctHash) {
        document.getElementById('protected-content').style.display = 'block';
        return;
    }

    var password = prompt("Please enter the password:");
    if (password === null || password === "") {
        alert("Password is required!");
        window.location.href = redirectUrl; // Redirect to the specified page
        return;
    }

    var hash = CryptoJS.SHA256(password).toString();
    if (showHash) {
        alert("The hashed password is: " + hash);
    }
    if (hash === correctHash) {
        localStorage.setItem(hashMemoryName, hash);
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert("Incorrect password!");
        window.location.href = redirectUrl; // Redirect to the specified page
    }
}