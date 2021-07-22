
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




