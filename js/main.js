window.addEventListener('load', equation);

function isFourLetter(word) {
    return word.length >= 4;
}

// Dictionaries for Number to Word Conversion
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
// Dictionaries End 

// Function to Convert Number to Word
function inWords (num) {
    // If Statement to Check No is not greater than 9 digit
    if ((num = num.toString()).length > 9)
    {
        return 'Number is to big';
    } 
    // Bring Number String Into Specific Format
    let n = ('000000000' + num).substr(-9).match(/^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{1})([0-9]{2})$/);
    
    if (!n){
    return;
    } 
    // Converting num to Words by Using Ternary Operator
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]): '';
    return str;
}
// Function End

// Function keyUp to Get Value From Form and Run inWords Function On it
function keyUp() 
{
    let number = document.getElementById('loanAmount').value;
    document.getElementById('words').innerHTML = inWords(number);
}
// Function End


// Function to Create Mathematical Captcha
function equation()
{
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    num1.innerText = Math.floor(Math.random()* 10);
    num2.innerText = Math.floor(Math.random()* 10);

    document.getElementById("ans").value = ''; 
}
// Function End

function nameverify(fname){
    let inputname = document.getElementById('fullName');
    const strSplit = fname.split(" ");
    const namealpha = /^[a-zA-Z ]*$/;

    if(!namealpha.test(fname)){
        inputname.classList.add('error');
        alert("Name Must contain alphabets only");
        return false;
    }
    else{
        inputname.classList.remove('error');
    }

    if(strSplit.length < 2)
    {
        alert("Name must have two words");
        return false;
    }
    //Check Fullname has Four Characters
    if(strSplit.length >= 2) 
    {
        let value = strSplit.every(isFourLetter);
        if (value == false)
        {
            alert("Each word must have four Characters");
            return false;
        }   
    }

    localStorage.setItem("fullName", strSplit[0]);
}

function emailverify(email) {
    const emailver = /^\w@\w.\w$/;
    console.log(emailver.test('email'))
    if(!emailver.test('email')){
        email.classList.add('error');
        alert("enter valid email");
        return false;
    }

}

// Function For Form Validation
function validateform()
{  
    let fname = document.getElementById("fullName").value; 
    let email = document.getElementById("email").value;
    let pan = document.getElementById("pan").value;   
   
    
    // If Statement to Check Fullname has Two Words
    nameverify(fname)

    localStorage.setItem("Email", email); 

    // Check Alphanumeric Pan Card Number Based on Pattern
    let pattern =/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if(!pattern.test(pan))
    {
        alert("Enter Correct Pan Card No.");
        return false;
    }

    // Verify Captcha 
    let ans = document.getElementById("ans").value;
    let num1 = document.getElementById("num1").innerText;
    let num2 = document.getElementById("num2").innerText;
    let res = Number(num1) + Number(num2);
    if(ans != res){
        alert("incorrect captcha");
        
        return false;
    }
        
return true; 
}

