let firstName = document.querySelector(".first");

let lastName = document.querySelector(".last");

let phoneNumber = document.querySelector(".number");

let birthDate = document.querySelector(".birth");

let email = document.querySelector(".email");

let password = document.querySelector(".pass");

let confirmedPassword = document.querySelector(".confirmed-password");

let nameRegex = /^[A-Z][a-z]{2,}$/;

let phoneNumberRegex = /^(01)[0125][0-9]{8}$/;

let birthDateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

let emailRegex = /^[a-z][a-z0-9%$+]*(@gmail.com){1}$/;

let passwordRegex = /\w{8,}$/;

let form = document.querySelector(".login");



firstName.addEventListener("input",()=>{
    let testFirstName = nameRegex.test(firstName.value);
    let fNameDiv = document.querySelector(".fname")
    fNameDiv.innerHTML = "";
    if(!testFirstName){
        fNameDiv.innerHTML =`
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> First name must start with capital letters </p>
            <p><i class="fa-solid fa-circle-xmark"></i> Only letters</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Have no spaces</p>
            <p><i class="fa-solid fa-circle-xmark"></i> More than 2 letters</p>
        </div>
        `
    }
    else
    {
        fNameDiv = document.querySelector(".fname")
        fNameDiv.innerHTML =`
        <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid First Name</p>
        `
    }
})

lastName.addEventListener("input",()=>{
    let testLastName = nameRegex.test(lastName.value);
    console.log(testLastName)
    let lNameDiv = document.querySelector(".lname")
    lNameDiv.innerHTML = "";
    if(!testLastName){
        lNameDiv.innerHTML =`
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> Last name must start with capital letters </p>
            <p><i class="fa-solid fa-circle-xmark"></i> Only letters</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Have no spaces</p>
            <p><i class="fa-solid fa-circle-xmark"></i> More than 2 letters</p>
        </div>
        `
    }
    else
    {
        lNameDiv = document.querySelector(".lname")
        lNameDiv.innerHTML =`
        <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Last Name</p>
        `
    }
})

phoneNumber.addEventListener("input", ()=>{
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    let numDiv = document.querySelector(".num");
    numDiv.innerHTML = "";
    if(!testPhoneNumber)
    {
        numDiv.innerHTML =`
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> Phone number must start with 010 OR 011 OR 012 OR 015</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Only 11 digits</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
        
        </div>
        `
    }
    else{
        numDiv.innerHTML = `
           <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Phone Number</p>
        `
    }
})

function validateBirthDate(birthDate){
    let testBirthDate = birthDateRegex.test(birthDate.value);
    if(testBirthDate){
        let birthArr = birthDate.value.split("/");
        if(Number(birthArr[0]) > 30 || Number(birthArr[1]) > 12 || Number(birthArr[2]) > 2025 ){
            return false;
        }
        else{
            return true;
        }
    }

    return false;
}

birthDate.addEventListener("input",()=>{
    let bdate = document.querySelector(".bdate");
    bdate.innerHTML = "";
    if(!validateBirthDate(birthDate)){
        bdate.innerHTML = `
            <p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> Birth date must be in the format dd/mm/yyyy </p>
        
        `
    }
    else{
        bdate.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Birth Date</p>
        `
    }
})

email.addEventListener("input", ()=>{
    let testEmail = emailRegex.test(email.value);
    let emailDiv = document.querySelector(".emaill");
    emailDiv.innerHTML = "";
    if(!testEmail){
        emailDiv.innerHTML = `
            <div class = "validation-message">
                <p><i class="fa-solid fa-circle-xmark"></i> Email must start with small letter</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have only letter, numbers and special characters as [% $ +]</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
            </div>
        `
    }
    else{
        emailDiv.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Email</p>
        
        `
    }
})

password.addEventListener("input",()=>{
    let testPassword = passwordRegex.test(password.value);
    let passDiv = document.querySelector(".password");
    passDiv.innerHTML = "";
    if(!testPassword) {
        passDiv.innerHTML = `
            <div class = "validation-message">
                <p><i class="fa-solid fa-circle-xmark"></i> Password must include 8 characters, letters and digits</p>
                <p> <i class="fa-solid fa-circle-xmark"></i>  Have no space</p>
            </div>
        `
    }
    else {
        passDiv.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Password</p>
        `
    }

})

confirmedPassword.addEventListener("input", ()=>{
    let confirmed = document.querySelector(".confirmed");
    confirmed.innerHTML = "";
    if(password.value != confirmedPassword.value) {
        confirmed.innerHTML = `
            <p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> The password does not match</p>
        `
    }
    else{
          confirmed.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Password Matched</p>
        `
    }
})

function clearValidationMessages(){
    let validation = document.querySelectorAll(".fname, .lname, .num, .bdate, .emaill, .password, .confirmed");
    validation.forEach((elem) => {
        elem.innerHTML = "";
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let testFirstName = nameRegex.test(firstName.value);
    let testLastName = nameRegex.test(lastName.value);
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    let testBirthDate = validateBirthDate(birthDate);
    let testEmail = emailRegex.test(email.value);
    let testPassword = passwordRegex.test(password.value);
    if(testFirstName && testLastName && testPhoneNumber && testBirthDate && testEmail && testPassword && (password.value == confirmedPassword.value)){
        Swal.fire({
            title: "Success!",
            text: "You logged in successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });
        form.reset();
        clearValidationMessages();
    }
    else{
        Swal.fire({
            title: "Oh! Invalid",
            text: "Please check that all fields are valid!!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
})

