
//validating register form
//validating using form name and input name.
let register =() =>{
    
    //validing fullnames
    let fullname = document.registerform.fullname
    let fullnames = /^[A-Z]([a-z'-.]+ [A-Z][a-z'-.]+)$/;
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
    let dobval = /^(0[1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])-(19[5-9][0-9]|20[0-4]|2003)$/
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
    let residence = /^[A-Za-z]+$/ //get any string with alphabetic letters starting with capital
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

