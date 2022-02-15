"use strinct"

▓ ← ╝ ô Ü y Ë È £ ± | ♂ ╚ ╚ ╔ ╩ ├
let _lstCifra1;
let _lstCifra2;
let _lstTolleranza;
let _lstFattore;
let colori = ["argento", "oro","nero", "marrone", "rosso", "arancio", "giallo", "verde", "blu", "viola", "grigio", "bianco"]; 

window.onload = function()
{
    _lstCifra1 = document.getElementById("lstCifra1");
    _lstCifra2 = document.getElementById("lstCifra2");
    _lstTolleranza = document.getElementById("lstTolleranza");
    _lstFattore = document.getElementById("lstFattore");

    _lstCifra1.selected = -1;        
    _lstCifra2.selected = -1;    

    for(let i=2; i<colori.length; i++)
    {
        let html = "<option value = '5'> " + colori[i] +" </option>";
        _lstCifra1.innerHTML += html;
        _lstCifra2.innerHTML += html;
    }

}

function generaNumero(a, b) 
{    
    let ris = Math.floor((b-a) * Math.random()) + a;
    
    return ris;
}