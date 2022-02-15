"use strinct"

let cont = [];
let _txtLanci;
let _pMsg;

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;
    _pMsg = document.getElementsByName("msg");
    //_pMsg = document.getElementsByTagName("p");
    return ris;
}

function init()
{
    _txtLanci = document.getElementById("txtLanci");

    for(let i=0; i<6; i++)
        cont.push(0);
        
    console.log(cont);

}

function genera()
{
    let num = _txtLanci.value;

    for(let i = 0; i < num; i++)
    {
        let n = generaNumero(1, 7);
        cont[n-1]++;
    }

    for(let i = 0; i < 6; i++)
        _pMsg[i].innerHTML = "La faccia " + (i + 1) +" è uscita: " +cont[i];

    for(let i=0; i<6; i++)
        cont[i] = 0;
}