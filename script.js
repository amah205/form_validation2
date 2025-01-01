'use strick'

const submit =document.querySelector('.submit');
const usernameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const password2Input=document.querySelector('#password2');
const formControlEl=document.querySelector('.form-control')
const form=document.querySelector('#form')



// show input error
/*function showError(input,message){
    const formControl =input.closest('.form-control');
    formControl.classList.add('error')

    const small =formControl.querySelector('small');
    small.textContent = message;
    showSuccess(formControl)
}

// show success outline
function showSuccess(input){
    const formControl =input.closest('.form-control');
    formControl.classList.add('success')
}

function checkEmail(input){
    const re = /\S+@\S+\.\S+/;
    // return re.test(String(email).toLowerCase());
    
    if(re.test(input.value.trim())){
        showSuccess(input)
        
    }else{
        showError(input,'Email is not valid')
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(item){
        if(item.value.trim() === ''){
            showError(item,`${getFieldName(item)} is required`)
        }else{
            showSuccess(item)
        }
    })
}

// Check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
    }else if(input.value.length >max){
        showError(input,`${getFieldName(input)} must be less ${max} characters`)
    }else{
        showSuccess(input)
    }
}


// check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match')
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}*/


// show error
function showError(input,message){
    const formControl=input.closest('.form-control')
    formControl.classList.add('error')

    const small =formControl.querySelector('small');
    small.textContent = message;
}

// show success
function showSuccess(input){
    const parentEl=input.closest('.form-control')
    parentEl.classList.add('success')

}

function checkEmail(input){
    const re = /\S+@\S+\.\S+/;
    // return re.test(String(email).toLowerCase());
    
    if(re.test(input.value.trim())){
        showSuccess(input)
        
    }else{
        showError(input,'Email is not valid')
    }
}



function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input ,`${getFieldName(input)} should atleast 3 digit`)
    }else if(input.value.length > max){
        showError(input ,`${getFieldName(input)} must be less than ${max}`)
    }else{
        showSuccess(input)
    }
}

// checkRequired
function checkRequired(inputArr){
    
    inputArr.forEach((mov) =>{
        if(mov.value.trim() === ''){
            showError(mov ,`${getFieldName(mov)} is required`)
        }else{
            showSuccess(mov)
        }
    })
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'must correspond ')
    
    }

}

function getFieldName(input){
  return  input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// EventListener
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);

    checkLength(username,3,15)

    checkLength(password,6,20)
    
    checkEmail(email)

    checkPasswordMatch(password,password2)
   /* if(usernameInput.value === ''){
        showError(username,'username is required')
        
    }else{
        showSuccess(username)
    }

    if(emailInput.value === ''){
        showError(emailInput,'Email is required')
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid')
       
    }else{
        showSuccess(emailInput)
    }

    if(passwordInput.value === ''){
        showError(passwordInput,'Password is required')
        
    }else{
        showSuccess(passwordInput)
    }

    if(password2Input.value === ''){
        showError(password2Input,'Password is required')
        
    }else{
        showSuccess(password2Input)
    }*/
})

