const loginForm = document.querySelector(`.login-form`);
loginForm.addEventListener(`submit`, (event) => {
    event.preventDefault();

    const emailInput = loginForm.elements[`email`];
    const passwordInput = loginForm.elements[`password`];

    const emailInputValue = emailInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();

    if (emailInputValue === `` || passwordInputValue === ``) {
        return alert('All form fields must be filled in');
    }


    const formDataObject = {
        email: emailInputValue,
        password: passwordInputValue
    };


    console.log(formDataObject);
    this.reset();
})
