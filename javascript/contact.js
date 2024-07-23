const confirm_email = document.getElementById("confirm_email");
const email = document.getElementById("email");
const contact_form = document.getElementById("contact_form");
const key = document.getElementById("key");


let p = document.createElement("p");
p.innerHTML = "Eメールが一致しません";

function confirmEmail(){
  confirm_email.addEventListener("input" , ()=>{
    let email_value = email.value;
    let confirm_value = confirm_email.value;

    if(email_value===confirm_value){
      confirm_email.className = "delete";
      contact_form.removeChild(p);

    }else{
      contact_form.insertBefore(p , key);
      confirm_email.className = "confirm_email";
    }

  })
}

window.onload = confirmEmail;



























