
//validating register form
let register =() =>{
    //validing fullnames
    let fullname = document.registerform.fullname
    let fullnames = /^[A-Za-z]+$/
    if(fullname.value ==''){
        fullname.style.border = "2px solid red";
    }
    else if(fullname.value.length <=8 && fullname.value.match(fullnames)) {
        fulllname.style.border = "2px solid green"
    }

    //validating date of birth
    let dob = document.registerform.dob
    if(dob.value !== ""){
          dob.style.border = "2px solid green";
    }
    else{
        dob.style.border = '2px solid red'
    }
    //validating gender.(not working ask Irene)
    // let gender = document.registerform.gender
    // if(gender.value !== ""){
    //       genderstyle.border = "2px solid green";
    // }
    // else{
    //     gender.style.border = '2px solid red'
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
    if(placeofresidence.value != ""){
        placeofresidence.style.border = "2px solid green"
    }
    else{
        placeofresidence.style.border = "2px solid red"
    }

    //validating emplooyes id--Zwash
    let zacarids = document.registerform.zacarids
    let zacarid = /^[0-9]+$/
    if(zacarids.value.match(zacarid) && zacarids.length== 3){
        zacarids.style.border = "2px solid green";
    }
    else{
        zacarids.style.border = "2px solid red";
    }
}
if(register()){}
button.addEventListener('click', (register))
e.preventDefault()

// validating register manager page
// let validation = ()=>{

//     //validating email.
//    let emailAddress = document.managerform.emailAddress
//    let email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
//     if(emailAddress.value.match(email)){
//         emailAddress.style.border = '1px solid green'
//     }
//     else{
//         emailAddress.style.border = '1px solid red'
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
    
   
// }

