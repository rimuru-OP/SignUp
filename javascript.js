const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    const pass = document.querySelector("#password");
    const confirmPass = document.querySelector("#confirmPassword");
    if(pass.value !== confirmPass.value){
        e.preventDefault();
        alert("Passwords do not match.")
    }
});