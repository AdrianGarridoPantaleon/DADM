document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    deviceInfo();
}

// FUNCIONES PARA VER LA INFORMACIÓN DEL DISPOSITIVO
function deviceInfo() {

    document.getElementById("version").innerHTML = device.cordova;
    document.getElementById("model").innerHTML = device.model;
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("androidVersion").innerHTML = device.version;
    document.getElementById("manufacturer").innerHTML = device.manufacturer;
    document.getElementById("isVirtual").innerHTML = device.isVirtual;
    document.getElementById("serialNo").innerHTML = device.serial;
}