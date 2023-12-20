function submitItem(){
    var name = document.getElementById("name").value;
    sessionStorage.setItem("name", name);

    var email = document.getElementById("email").value;
    sessionStorage.setItem("email", email);

    var password = document.getElementById("password").value;
    sessionStorage.setItem("password", password);

    var phone = document.getElementById("phone").value;
    sessionStorage.setItem("phone", phone);

    
    var gender = getSelectedGender();
    sessionStorage.setItem("gender", gender);




    

    // Regular expression for alphabet characters
    var alphabetRegex = /^[A-Za-z ]+$/;

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for numeric characters
    var numericRegex = /^[0-9]+$/;

   
    if (!alphabetRegex.test(name)) {
        alert("Please enter a valid name with alphabet characters only.");
        window.location.href="index.html";
        return;
    }

    else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        window.location.href="index.html";
        return;
    }
    else if (!numericRegex.test(phone)) {
        alert("Please enter a valid phone number with numeric characters only.");
        window.location.href="index.html";
        return;
    }

    else{
        alert("Form submitted successfully!");

        window.location.href="output.html";
    }
}

function getSelectedGender() {
    var checkboxes = document.getElementsByName("gender");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return checkboxes[i].value;
        }
    }

    return null;
}



