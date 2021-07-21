
//validating register form
let register =() =>{
    
    //validing fullnames
    let fullname = document.registerform.fullname
    let fullnames = /^([a-zA-Z'-.].+[a-zA-Z'-.]+)$/;
    if(!fullname.value.match(fullnames)){
        fullname.style.border = "2px solid red"
        return false;    
    }
    else{
        fullname.style.border = "2px solid green"
    }
    if(fullname.value.length <8 ){
        fullname.style.border = "2px solid red"; 
        return false;      
    }
    else{
        fullname.style.border = "2px solid green"
    }
    
    //validating date of birth
    let dob = document.registerform.dob
    if(dob.value == ""){
          dob.style.border = "2px solid red";
          return false;
    }
    else{
        dob.style.border = '2px solid green'
    }
    //validating gender.(not working ask Irene)
    // let gender = document.registerform.gender
    // if(gender.value == ""){
    //       gender.style.border = "2px solid red";
    //       return false;
    // }
    // else{
    //     gender.style.border = "2px solid green";
    // }

    
    //validating NIN
    let nin = document.registerform.nin
    let ninnumber = /^[A-Za-z-0-9]+$/
    if (nin.value ==''){
        nin.style.border = "2px solid red";
    
    }
    else if (nin.value.match(ninnumber) || nin.length==11){
        nin.style.border = "2px solid green";
    }
    
    //validating place of residence.
    let placeofresidence = document.registerform.placeofresidence
    let residence = /^[A-Za-z]+$/
    if(!placeofresidence.value.match(residence)){
        placeofresidence.style.border = "2px solid red"  
        return false;   
    }
    else{
        placeofresidence.style.border = "2px solid green"
    }
    

    //validating emplooyes id--Zwash...find our how to do hardcore validation
    let zacarids = document.registerform.zacarids
    let zacarid = /^[0-9]+$/
    if(!zacarids.value.match(zacarid) && zacarids.length== 3){
        zacarids.style.border = "2px solid red";
        return false;
    }
    else{
        zacarids.style.border = "2px solid red";
    }
}
button.addEventListener('submit', (register))


// validating register manager page
//let registerManager = ()=>{

    //validating email.
//    let emailAddress = document.registerManager.emailAddress
//    let email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
//     if(!emailAddress.value.match(email)){
//         emailAddress.style.border = '2px solid red'
//         fullnameerror.innerHTML = "Please fill in correct email"
//         fullnameerror.style = "font-size: 20px, color:red"
//         return false;
//     }
//     else{
//         emailAddress.style.border = '2px solid green'
//     } 
   
    //defining variables
//     let password = document.getElementById("password");
//     let passwordd = /^[0-9a-zA-Z]+$/
//     let error2 = document.getElementById("error2")
//     if(password.value ==''){
//         password.style.border = "1px solid red";
//     }
//     let passwordval = document.managerform.password
//     if(passwordval.value.match(passwordd)){
//         passwordval.style.border = '1px solid green'
//         error2.innerHTML = ''
//     }
//     else{
//         passwordval.style.border = '1px solid red'
//         error2.innerHTML = 'Put correct password.'
//         error2.style = 'font-size: 12px; color: red;'
        
//     } 
 //}
 //button.addEventListener('submit', (registerManager))

