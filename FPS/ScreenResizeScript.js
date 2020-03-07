"use strict";

function FclientX() {
    var x = document.getElementById('clientX').value;
    x = parseInt(x);
    return(x);
}

function FclientY() {
    var y = document.getElementById('clientY').value;
    y = parseInt(y);
    return(y);
}

function FclientZ() {
    var z = document.getElementById('clientZ').value;
    z = parseInt(z);
    return(z);
}

function FwallX() {
    var x = document.getElementById('wallX').value;
    x = parseInt(x);
    return(x);
}

function FwallY() {
    var y = document.getElementById('wallY').value;
    y = parseInt(y);
    return(y);
}

function FwallZ() {
    var z = document.getElementById('wallZ').value;
    z = parseInt(z);
    return(z);
}

function FClients() {
    var ass = new Object();
    ass[0] = document.getElementById('clientX').value;
    ass[1] = document.getElementById('clientY').value;
    ass[2] = document.getElementById('clientZ').value;
    return(ass);
}
