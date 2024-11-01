function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function setLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}

function setDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
}
function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;
}
function validateSignUpForm() {
    var firstName = document.getElementById("f-name").value;
    var lastName = document.getElementById("l-name").value;
    var email = document.getElementById("signUpEmail").value;
    var address = document.getElementById("address").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById("birthday").value;
    var city = document.getElementById("City").value;
    var pincode = document.getElementById("pincode").value;

    if (firstName.trim() === "" || firstName.length < 2) {
        alert("Please enter a valid first name with at least 2 characters.");
        return false;
    }

    if (lastName.trim() === "" || lastName.length < 2) {
        alert("Please enter a valid last name with at least 2 characters.");
        return false;
    }

    if (address.trim() === "") {
        alert("Please enter your address.");
        return false;
    }
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }
    if (city === "") {
        alert("Please enter your city.");
        return false;
    }
    
    if (dob.trim() === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    if (pincode.trim() === "" || isNaN(pincode) || pincode.length < 5 || pincode.length > 6) {
        alert("Please enter a valid pincode (5-6 digits).");
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

var darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {

  document.body.classList.toggle('dark-mode');
});
