
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    checkConnection();
}


function checkConnection() {
    var networkState = navigator.connection.type;
    console.log(navigator.connection.type);
    console.log(typeof networkState);

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    switch (states[networkState]) {

        case states[Connection.WIFI]:
            document.getElementById("WIFI").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.ETHERNET]:
            document.getElementById("ETHERNET").checked = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.CELL_2G]:
            document.getElementById("2G").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.CELL_3G]:
            document.getElementById("3G").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.CELL_4G]:
            document.getElementById("4G").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.CELL]:
            document.getElementById("CELL").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.NONE]:
            document.getElementById("NONE").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("WIFI").disabled = true;
            document.getElementById("UNKNOWN").disabled = true;
            break;

        case states[Connection.UNKNOWN]:
            document.getElementById("UNKNOWN").checked = true;
            document.getElementById("ETHERNET").disabled = true;
            document.getElementById("2G").disabled = true;
            document.getElementById("3G").disabled = true;
            document.getElementById("4G").disabled = true;
            document.getElementById("CELL").disabled = true;
            document.getElementById("NONE").disabled = true;
            document.getElementById("WIFI").disabled = true;
            break;
    }
}

// function checkConnection() {
//     var networkState = navigator.connection.type;

//     var states = {};
//     states[Connection.UNKNOWN]  = 'Unknown connection';
//     states[Connection.ETHERNET] = 'Ethernet connection';
//     states[Connection.WIFI]     = 'WiFi connection';
//     states[Connection.CELL_2G]  = 'Cell 2G connection';
//     states[Connection.CELL_3G]  = 'Cell 3G connection';
//     states[Connection.CELL_4G]  = 'Cell 4G connection';
//     states[Connection.CELL]     = 'Cell generic connection';
//     states[Connection.NONE]     = 'No network connection';

//     document.getElementById("conexionType").innerHTML=states[networkState];
// }
