var eye_hidden = document.getElementById("eye_hidden");
eye_hidden.addEventListener("click", eye__showihidden);
var inputpass = document.getElementById("password3");
function echeckvaluepas(){
    if(inputpass.value==""){
    document.getElementById("eye__pass-show").style.display = "none";
}else{
    document.getElementById("eye__pass-show").style.display = "block";
}
}

function eye__showihidden() {
    var check_kki9 = document.getElementById("password3");
    if(check_kki9.type=="password"){
        document.getElementById("password3").type = "text";
        document.getElementById("i_id_eye").classList.remove("fa-regular");
        document.getElementById("i_id_eye").classList.remove("fa-eye-slash");
        document.getElementById("i_id_eye").classList.add("fa-regular");
        document.getElementById("i_id_eye").classList.add("fa-eye");
    }else if(check_kki9.type=="text"){
        document.getElementById("password3").type = "password";
        document.getElementById("i_id_eye").classList.remove("fa-regular");
        document.getElementById("i_id_eye").classList.remove("fa-eye");
        document.getElementById("i_id_eye").classList.add("fa-regular");
        document.getElementById("i_id_eye").classList.add("fa-eye-slash");
    }
}
