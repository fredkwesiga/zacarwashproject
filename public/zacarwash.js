
//validating register form
//validating using form name and input name.
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
    //validating gender.
    let gender = document.registerform.gender
    if(gender.value == ""){
          gender.style.border = "2px solid red";
          return false;
    }
    else{
        gender.style.border = "2px solid green";
    }


    //validating NIN
    let nin = document.registerform.nin
    let ninnumber = /^[A-Za-z-0-9]+$/
    //  if (!(nin.value.match(ninnumber) && nin.length==11)){
    //     nin.style.border = "2px solid red";
    //     return false;
    // }
    // else{
    //     nin.style.border = "2px solid green"
    // }

    if (!(nin.value.length==11)) {
        nin.style.border = "1px solid red"
       return false;
    } else if (nin.value.length == 11 && nin.value.match(ninnumber)) {
        nin.style.border = "1px solid green"
    } else if (!(nin.value.length ==11 && nin.value.match(ninnumber))) {
        nin.style.border = "1px solid red"
        return false;
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
    let zaemployeeid = /^Zwash([0-9]{3})$/;
    if (!(zacarids.value.length ==8 )) {
        zacarids.style.border = "1px solid red"
       return false;
    } else if ((zacarids.value.length== 8) && (zacarids.value.match(zaemployeeid))) {
        zacarids.style.border = "1px solid green"
    } else if (!(zacarids.value.match(zaemployeeid))) {
        zacarids.style.border = "1px solid red"
        return false;
    }    

}
button.addEventListener('submit', (register))

