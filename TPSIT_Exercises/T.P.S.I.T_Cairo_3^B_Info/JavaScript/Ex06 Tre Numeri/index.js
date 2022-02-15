"use strinct"
let _txtN;
let _chkN;
let vet = [];
let aus = [];

function init()
{
    _txtN = document.getElementsByName("txtN");
    _chkN = document.getElementsByName("chkN");
    for(let i=0; i<9; i++)
    {
        aus[i] = i+1;
    }

    for(let i=0; i<9; i++)
    {
        let pos = generaNumero(0,aus.length);
        vet[i] = aus[pos];
        aus.splice(pos, 1);
    }
    console.log(vet);
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;
    //_pMsg = document.getElementsByTagName("p");
    return ris;
}

function controlla()
{
    for(let i=0; i<3; i++)
    {
        if(vet.includes(_txtN[i].value))
            cont++;
    }






  /*if(cont == 3)
    {
        alert("Hai vinto, complimenti!");
        _btnInvia.disabled = true;

        for(let i=0; i<5; i++)
        {
            _txtNum[i].disabled = true;
        }
    } */
}
