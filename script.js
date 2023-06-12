document.getElementById('title').addEventListener("click", changeHead);

function changeHead(){
    document.getElementById('title').innerHTML = "You clicked me";
}

document.getElementById("signup").addEventListener("click", signUp);

function signUp(){
    document.getElementById("signup").innerHTML = "Signed Up";
}