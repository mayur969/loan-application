let rName = document.getElementById("rName");
let email = document.getElementById("email");
let otpNo = document.getElementById("otpNo");

let attempt = 3;

rName.innerHTML= localStorage.getItem("fullName");
email.innerHTML= localStorage.getItem("Email");

// On Window load write random 4 digit otp in console
window.addEventListener("load", () =>{
    let otp = '';
    for(let i=0; i<4; i++){
        otp += Math.floor(Math.random()*10);
    }
    console.log("otp number"+otp);
    localStorage.setItem('Otp', otp);
})

// Validate User Input Otp With Otp Shown on Console
function validateOtp(){
    let otpNum = localStorage.getItem("Otp");
    let inputotp = document.getElementById("otpNo").value;
    let otpval = /^[0-9]{4}$/
    if(!inputotp){
        alert('Please enter otp');
        return false;
    }
    if(!otpval.test(inputotp)){
        alert('Otp should only contain Number');
        return false;
    }
    // If Otp is Correct Return True
    if(otpNum == inputotp){
        return true;
    }
    else
    {
        // Else Decrement attempt Variable
        attempt--;
        console.log(attempt);
        // After 3 Attempts Redirect to Page not found
        if(attempt == 0){
            location = "http://pixel6.co/error";
        }
        return false;
    }

   
}