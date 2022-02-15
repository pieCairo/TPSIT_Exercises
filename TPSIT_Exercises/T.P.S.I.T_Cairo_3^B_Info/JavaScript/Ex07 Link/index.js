"use strinct"


window.onload = function()
{
    _lstSiti = document.getElementById("lstSiti");

    _lstSiti.selectedIndex = -1;
}

function generaNumero(a, b) 
{    
    let ris = Math.floor((b-a) * Math.random()) + a;
    
    return ris;
}

function visualizza()
{
    let url = _lstSiti.value;
    window.open(url);
}

