
// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email adress inside the email in the field
    // alwayes remaber to use.value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    // step-3: get password
    //3.a: get id set on html element 
    //3.b: get the element
    //3.c: get the value from the elemnt
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    // Danger : do not verify email or password on the client side
    // step-4: verify email or password
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href='bank.html'
    }
    else{
        alert('Tui amar sontan na')
    }
})