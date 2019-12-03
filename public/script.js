//validations for signup.html

const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "fname", "lname", "phone"];
myForm.addEventListener("submit", validation);

function validation(e) {
    let data = {};
    e.preventDefault();
    errors.forEach(function (item) {
        item.classList.add("hide"); // this is the error
    })
    let error = false;
    inputs.forEach(function (el) { // loops thro all fields
        let tempName = el.getAttribute("name");
        if (tempName != null) {
            el.style.borderColor = "#ddd";
            if (el.value.length == 0 && required.includes(tempName)) {
                addError(el, "Required Field", tempName);
                error = true;
            }
            if (tempName == "firstname") {
                let exp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "invalid First name", tempName);
                    error = true;
                }
            }
            if (tempName == "lastname") {
                let exp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "invalid Last name", tempName);
                    error = true;
                }
            }

            if (tempName == "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Invalid Email", tempName);
                    error = true;
                }
            }
            if (tempName == "phone") {
                let exp = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Only numbers", tempName);
                    error = true;
                }
                if (!(el.value.length > 8 && el.value.length < 11)) {
                    addError(el, "Needs to be between 8-10 numbers", tempName);
                    error = true;
                }
            }
            data[tempName] = el.value;
        }
    })
    if (!error) {
        window.location = "/submission"
    }
}

function addError(el, mes, fieldName) {
    let temp = el.nextElementSibling;
    temp.classList.remove("hide");
    temp.textContent = fieldName.toUpperCase() + " " + mes;
    el.style.borderColor = "red";
    el.focus();
}