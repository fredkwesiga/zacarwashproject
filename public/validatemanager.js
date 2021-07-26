

// validating register manager page
//validating using form name, input name and also using innerHTML
let registerManager = ()=>{
    
    //validating Manager's fullnames
    let fullnames = document.newManager.fullnames
    // let errorFullNames = document.getElementById("#errorfullnames")
    let managersname = /^[A-Z]([a-z'-.]+ [A-Z][a-z'-.]+)$/;

    if(!fullnames.value.match(managersname)){
        fullnames.style.border = "2px solid red"
        // errorFullNames.innerHTML = "Fill in the correct names"
        return false;
    }
    if(fullnames.value.length <8){
        fullnames.style.border = "2px solid red"
        // errorFullNames.innerHTML = "Fill in the input with correct names"
        return false;
    }
    else{
        fullnames.style.border = "2px solid green"
    }


    //validating email.
   let emailAddress = document.newManager.emailAddress
//    let errorEmail = document.getElementById("#erroremail")
   let email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if(!emailAddress.value.match(email)){
        emailAddress.style.border = '2px solid red'
        // errorEmail.innerHTML = "Please fill in correct email"
        // errorEmail .style = "font-size: 2px, color:red"
        return false;
    }
    if(emailAddress.value ==""){
        emailAddress.style.border = '2px solid red'
    //    errorEmail.innerHTML = "Email address missing"
    //    errorEmail.style = "font-size: 2px, color:red"
       return false;
    } 
    else{
        emailAddress.style.border = '2px solid green'
    } 
   
    //defining variables
    let password = document.newManager.password
    // input can be a mix of numbers and letters
    let managerpassword = /^[0-9a-zA-Z]+$/
    let errorPassword = document.getElementById("#passworderror")

    if(!password.value.match(managerpassword)){
        password.style.border = "1px solid red"
        // errorPassword.innerHTML = "fill in the correct password" 
        return false;
    }
    if(password.value.length<4)
    {
        password.style.border = '1px solid red'
        return false;
        // errorPassword .innerHTML = 'Fill in correct password.'  
    } 
    else {
        password.style.border = '1px solid green'
    }
}
button.addEventListener('submit', (registerManager))