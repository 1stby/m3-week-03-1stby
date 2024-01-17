const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");

// input 錯誤的訊息
function showError(input, message) {
    const formControl = input.parentElement;//找input的父元素
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
//Show success outline 正確
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

// 檢查email 是否正確
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}
// 檢查 是否為必填
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        //trim 用於去除前後空格
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}
// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}
// check password 是否一樣
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match")
    }
}
// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassword(password, password2);
});