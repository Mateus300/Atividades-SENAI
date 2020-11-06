var clique = document.getElementById('botao');

clique.addEventListener('click', mudaTxt);

function mudaTxt() {
    // var h1 = document.getElementById("txt");
    document.getElementById('txt').innerHTML = "A mágica continua!";
}

var txt = document.getElementById("texto");

txt.addEventListener('click', mudaCor)

function mudaCor() {
    document.getElementById('texto').style.color = "red";
}


//Atividade 3 - Legume
var addLeg = document.getElementById("addLegume");
addLeg.addEventListener('click', addLegume)

var nomeLegume = document.getElementById('nomeLegume');

var lista = document.getElementById("leg");

var legume = [];

console.log(legume)

function addLegume() {
    var li = document.createElement('li');
    li.textContent = nomeLegume.value;

    legume.push(li)

    nomeLegume.value = '';

    legume.map(legume => lista.appendChild(legume));
}

function zerar() {
    var recebe = legume.length;
    legume.splice(0, recebe);   
    legume.pop();

    lista.innerHTML='';

    console.log(zerar)
}

var removeLeg = document.getElementById('removerLegume');

removeLeg.addEventListener('click', remoLegume)


function remoLegume() {
    // for (var i = 0; i < legume.length; i++);

    // i = i - 1;

    

    // legume.splice(i, 1);

    // lista.removeChild(lista.childNodes[i]); 

    zerar();
}

//Atividade 3 - Fruta

var addfru = document.getElementById('addFruta');
addfru.addEventListener('click', addFruta);

var nomeFruta = document.getElementById('nomeFruta');

var listaFru = document.getElementById("fru");

var fruta = [];

function addFruta() {
    var li = document.createElement('li');
    li.textContent = nomeFruta.value;

    fruta.push(li)

    nomeFruta.value = '';

    fruta.map(fruta => listaFru.appendChild(fruta));
}

var removeFruta = document.getElementById('removerFruta');

removeFruta.addEventListener('click', remoFruta);

function remoFruta() {
    for(var i = 0; i < fruta.length; i++);

    i = i -1;

    fruta.splice(i, 1);

    listaFru.removeChild(listaFru.childNodes[i]);

    zerarFru();
}

function zerarFru() {
    var recebe = fruta.length;
    fruta.splice(0, recebe);   
    fruta.pop();

    listaFru.innerHTML='';

}


















// var lista = document.getElementById("leg");

// function addLegume() {
//     var li = document.createElement('li');
//     li.textContent = nomeLegume.value;
//     lista.appendChild(li);
// }

// var removeLeg = document.getElementById('removerLegume');

// removeLeg.addEventListener('click', remoLegume)


// function remoLegume() {
//     var lista = document.getElementById("leg");
//     var el = document.getElementsByName("li")
//     li.parentNod.removeChild('li');
// }