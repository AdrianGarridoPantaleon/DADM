
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    mostrar();
}

function mostrar(){

    var alerta = document.getElementById("alert");
    var confirmar = document.getElementById("confirm");
    var prompt = document.getElementById("prompt");
    alerta.addEventListener("click", showAlert);
    confirmar.addEventListener("click", showConfirm);
    prompt.addEventListener("click", showPromt);

}


// FUNCIONES PARA VER CUADROS DE DIÁLOGO

// FUNCIÓN ALERT
function showAlert() {
    navigator.notification.alert(
        'Alerta',  // message
        alertDismissed,         // callback
        'Esto es un Alert de Cordova',            // title
        'Done'                  // buttonName
    );
}

function alertDismissed() {
    alert("Esto es una Alerta normal JS");
}

var options = ["OK", "Cancel"];

// FUNCION CONFIRMAR
function showConfirm(){
    navigator.notification.confirm(
        'Enhorabuena!', // message
         onConfirm,            // callback to invoke with index of button pressed
        'Bien Hecho',           // title
        ['Volver a Intentarlo','Salir']     // buttonLabels
    );
}

function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

//FUNCIÓN PROMPT
function showPromt() {
    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        options,             // buttonLabels
        ''                 // defaultText
    );
}

function onPrompt(results){
    var buttonIndex = results.buttonIndex;
    var input1 = results.input1;
    if(buttonIndex==1){
        alert("Bienvenido " + input1);
    }else{
        alert("Error");
    }
}