function validate(){
    // alert ('working');
    const fullname = document.myForm.fullName.value;
    const email = document.myForm.email.value;
    const atPost = email.indexOf("@");
    const dotPost = email.lastIndexOf(".");
    const phone = document.myForm.phone.value;
    const password = document.myForm.password.value;
    const confirm_password = document.myForm.confirm_password.value;

      //error
    const name_err = document.querySelector('.name-err');
    const email_err = document.querySelector('.email-err');
    const phone_err = document.querySelector('.phone-err');
    const password_err = document.querySelector('.password-err');
    const confirm_err = document.querySelector('.confirm-err');

   //check users name
   if (fullname == ''){
    name_err.innerHTML = 'please fill in your name';
    return false;
   }
   //check email
   if (email == ''){
    email_err.innerHTML = 'This field is  required';
    return false;
   }
   if (atPost < 1 || (dotPost  -  atPost < 2)){
    email_err.innerHTML = 'Invalid email address';
   }
   //check phone
   if (phone == ''){
    phone_err.innerHTML = 'Phone feild is required';
    return false;
   }
if (isNaN(phone)){
  phone_err.innerHTML = 'Requires a phone number';
  return false;
}
if (phone.length > 14) {
  phone_err.innerHTML = 'phone requires 14 digits';
  return false;
}
if (password == ''){
  password_err.innerHTML = 'password feild is required';
  return false;
}
if (password.length > 8){
  password_err.innerHTML = "password limit exceeded";
  return false;
}
if(confirm_password == ''){
  confirm_err.innerHTML = 'please confirm your password';
  return false;
}
if(confirm_password != password){
  confirm_err.innerHTML = "password must be same";
  return false;
}
}