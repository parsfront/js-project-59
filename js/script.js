const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        setError(username, "این فیلد نمیتواند خالی باشد نامی برای خود انتخاب کنید.");
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "مقدار ایمیل نمیتواند خالی باشد.");
    } else if (!isEmail(emailValue)) {
        setError(email, "ایمیل وارد شده صحیح نیست.");
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "مقدار پسوورد خالی است پسووردی وارد کنید.");
    } else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, "مقدار پسوورد خالی است پسووردی وارد کنید.");
    } else if (passwordValue !== password2Value) {
        setError(password2, "پسووردها با هم برابر نیستند.");
    } else {
        setSuccess(password2);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");

    span.innerHTML = message;

    console.log(span);
    formControl.className = "form-control error";
}

function setSuccess(input) {
    const formControll = input.parentElement;
    formControll.className = "form-control success";
}

const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
    return pattern.test(email);
}
