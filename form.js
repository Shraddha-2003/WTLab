document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let department = document.getElementById("department").value;
    let college = document.getElementById("college").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    
    if (name.length < 3) {
        document.getElementById("message").innerText = "Name must be at least 3 characters long.";
        return;
    }
    if (!email.includes("@")) {
        document.getElementById("message").innerText = "Please enter a valid email address.";
        return;
    }
    if (password.length < 6) {
        document.getElementById("message").innerText = "Password must be at least 6 characters long.";
        return;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById("message").innerText = "Please enter a valid 10-digit mobile number.";
        return;
    }
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Registration successful!";
});
