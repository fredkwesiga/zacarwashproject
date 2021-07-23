//validating carwash track page
//validating using form name and input name.
let costmonitorForm =(e) =>{
    //validing car model
    let carmodel = document.costmonitorform.carmodel
    if(carmodel.value.length=='' ){
        carmodel.style.border = "2px solid red"; 
        return false;      
    }
    else{
        carmodel.style.border = "2px solid green"
    }
    
    //validating car number plate
    let carnumberplate = document.costmonitorform.carnumberplate
    let errorcarnumberplate = document.getElementById(errorplate)
    let carplate =  /^([A-Z]{3}.*[\s\.]*[0-9]{3}[A-Z]{1})$/
    if(!carnumberplate.value.trim(carplate)){
          carnumberplate.style.border = "2px solid red";
          errorcarnumberplate.innerHTML = "Number plate starts with Uppercase."
          return false;
    }
    // if(carnumberplate.value.length<7){
    //     carnumberplate.style.border = "2px solid red";
    //     errorcarnumberplate.innerHTML = "Number should have 7 characters";
    //     return false;
    // }
    else{
        carnumberplate.style.border = '2px solid green'   
    }


     //validing car colour
    let carcolour = document.costmonitorform.carcolour
    if(carcolour.value.length=='' ){
        carcolour.style.border = "2px solid red"; 
        return false;      
    }
    else{
        carcolour.style.border = "2px solid green"
    }

     //validating car packages
    let costmonitorpackages = document.costmonitorform.costmonitorpackages
    if(costmonitorpackages.value.length=='' ){
        costmonitorpackages.style.border = "2px solid red"; 
        return false;      
    }
    else{
        costmonitorpackages.style.border = "2px solid green"
    }

     //validating date arrived
    let dateArrived= document.costmonitorform.dateArrived
    if(dateArrived.value.length=='' ){
        dateArrived.style.border = "2px solid red"; 
        return false;      
    }
    else{
        dateArrived.style.border = "2px solid green"
    }

     //validating time arrived
    let timeArrived= document.costmonitorform.timeArrived
    if(timeArrived.value.length=='' ){
        timeArrived.style.border = "2px solid red"; 
        return false;      
    }
    else{
        timeArrived.style.border = "2px solid green"
    }
e.preventDefault()
}
button.addEventListener('submit', (costmonitorForm))