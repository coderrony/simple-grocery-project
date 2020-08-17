
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_pass = document.getElementById('confirm-password')

function checkAll(inputArr){
    inputArr.forEach(input=>{
        if(input.value === ''){
            showError(input,`${input.id} is required`)
        }else{
            showSuccess(input)
        }
    })
}
function showError(input,message){
      let item = input.parentElement
       item.classList = 'form-control error'
       let small = item.querySelector('small')
       small.innerText = message
}
function showSuccess(input){
    let item = input.parentElement
    item.classList = 'form-control success'
}
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${input.id} is not less then ${min} character`)
    }
}
function emailValid(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value)){
      showSuccess(input)
  }else{
      showError(input,`${input.id} is not valid`)
  }
}
function passwordMatch(pass1,pass2){
    if(pass1 !== pass2){
        showError(pass2,`${pass2.id} is does not match ${pass1.id} `)
    }
}
form.addEventListener('submit',function(e){
   e.preventDefault()
   checkAll([username,email,password,confirm_pass])
   checkLength(username,4,8)
   checkLength(password,8,25)
   emailValid(email)
   passwordMatch(password,confirm_pass)
})