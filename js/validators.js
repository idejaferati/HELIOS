function validatePhoneNum() {
    var phoneNum = document.getElementById("phone");
    var regex = phoneNum.value.search(/^\d{3}\/\d{3}\/\d{3}$/);
    if (regex != 0) {
        alert("The number you entered is not valid.\n Please, enter a valid one (ex: 044/545/444)")
        return false;
    }
    else {
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    var regEx = email.value.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    try {
        if (regEx != 0) throw "Invalid Email!";
    }
    catch (err) {
        alert(err);
    }
}

function validateFullName() {
    var fullname = document.getElementById("fullName");
    var re = fullname.value.search(/^[a-zA-Z]{2,}$/);
    try {
        if (re != 0) throw "Invalid Fullname!";
    }
    catch (err) {
        alert(err);
    }
}

function validateAccountNum() {
    var account = document.getElementById("accountNum");
    var rex = account.value.search(/^[0-9]{16}$/);
    try {
        if (rex != 0) throw "Invalid Account Number!";
    }
    catch (err) {
        alert(err);
    }
}