function isValidLength(password) { 
    return password.length >= 6 && password.length <= 10;
}

function isOnlyLettersAndDigits(password) { 
    return /^[A-Za-z0-9]+$/.test(password);
}

function hasTwoDigits(password) {
    const digitCount = password.split("").filter((char) => /\d/.test(char)).length;
    return digitCount >= 2;
}

function validatePassword(password) {
    let isValid = true;

    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!isOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!hasTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

const password = 'pass';
validatePassword(password);