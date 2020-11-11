var empregos = new Array(100);
var size_empregos = 0;
var tabela = "";

function Emprego(profissao, nome, localidade, curriculo, data){
    /*Maiores ofertas*/
    this.profissao = profissao;
    this.nome = nome;
    this.localidade = localidade;
    this.curriculo = curriculo;
    this.data = data;
    size_empregos++;
}

function loadMaioresOfertas()
{

    for(i = 0; i < empregos.length; i++){
        document.write(
        "<tr>"+ 
            "<td>"+empregos[i].profissao+"</td>"+
            "<td>"+empregos[i].nome+"</td>"+
            "<td>"+empregos[i].localidade+"</td>"+
            "<td>"+empregos[i].data+"</td>"+
        "</tr>");
    }


    // for(var i = 0; i < empregos.length; i++){

    //     tabela = tabela + ("<tr>" + "<td>" +
    //     empregos[i].profissao + "</td>" +
    //     "<td>" +
    //     empregos[i].nome + "</td>" +
    //     "<td>" +
    //     empregos[i].data + "</td>" +
    //     "</tr>");
    // };

    // var res = document.getElementById('maiores_ofertas');
    // res.innerHTML = tabela.value;
}
console.log(loadMaioresOfertas)

function carregarTable(){
    let job_list = document.getElementById("maiores_ofertas");
    job_list.innerHTML = "";

    let trHeader = document.createElement('tr');

    let thProfissao = trHeader.appendChild(document.createElement('th'));
    thProfissao.innerHTML = "Profissao";

    let thNome = trHeader.appendChild(document.createElement('th'));
    thNome.innerHTML = "Ofertante";

    let thLocalidade = trHeader.appendChild(document.createElement('th'));
    thLocalidade.innerHTML = "Local";

    let thCurriculo = trHeader.appendChild(document.createElement('th'));
    thCurriculo.innerHTML = "Portifólio";

    let thData = trHeader.appendChild(document.createElement('th'));
    thData.innerHTML = "Data de inclusão";

    job_list.appendChild(trHeader);

    for(i = 0; i < empregos.length; i++){
        let tr = document.createElement('tr');

        let tdProfissao = tr.appendChild(document.createElement('td'));
        tdProfissao.innerHTML = empregos[i].profissao;

        let tdNome = tr.appendChild(document.createElement('td'));
        tdNome.innerHTML = empregos[i].nome;
        
        let tdLocalidade = tr.appendChild(document.createElement('td'));
        tdLocalidade.innerHTML = empregos[i].localidade;

        let tdCurriculo = tr.appendChild(document.createElement('td'));
        let a = tdCurriculo.appendChild(document.createElement('a'));
        a.href = "#";
        a.innerHTML = empregos[i].curriculo;

        let tdData = tr.appendChild(document.createElement('td'));
        tdData.innerHTML = empregos[i].data;

        job_list.appendChild(tr);
    }
}

function limparDadosRegistro(){
    document.forms[0].profissao.value = "";
    document.forms[0].nome.value = "";
    document.forms[0].localidade.value = "";
    document.forms[0].data.value = "";
}

function limparDadosConsulta(){
    document.forms[1].profissao.value = "";
    document.forms[1].localidade.value = "";
    let table = document.getElementById("empregos_consultas");
    if(table){
        let aux = document.getElementById("aux");
        aux.innerHTML = "";
    }
}

function registaOferta()
{

    let profissao = document.forms[0].profissao.value;
    let nome = document.forms[0].nome.value;
    let localidade = document.forms[0].localidade.value;
    let data = document.forms[0].data.value;

    // var _profissao=document.forms[0].profissao.value;
    // var _nome=document.forms[0].nome.value;
    // var _localidade=document.forms[0].localidade.value;
    // var _curriculo=document.forms[0].curriculo.value;
    // var _data=document.forms[0].data.value;

    if(profissao && nome && localidade && data){

        let curriculo = nome.toString().toLowerCase().replace(" ","-")+".pdf";
        data = formatarData(data);

        empregos[size_empregos] = new Emprego(profissao, nome, localidade, curriculo, data);
        document.getElementById("confirmacao").innerHTML="<b>O registro foi efectuado com sucesso.</b>";
        limparDadosRegistro();
        carregarTable();
    }else{
        alert("Dados invalidos!");
    }

    // empregos[size_empregos] = new Emprego(_profissao, _nome,
    // _localidade, _curriculo, _data);
    // document.getElementById("confirmacao").innerHTML="<b>O registro foi efectuado com sucesso.</b>";
    // carregarTable();
}

function formatarData(valor) {
    let date = new Date(valor);
    let dia = date.getDate();
    dia++;
    let mes = date.getMonth();
    mes++;
    let ano = date.getFullYear();
    ano = ano.toString().substring(2,4);

    return dia + "/" + mes + "/" + ano;
}

console.log(registaOferta)


function consultarEmpregos()
{
    // var _profissao=document.forms[1].profissao.value;
    // var _localidade=document.forms[1].localidade.value;

    let profissao = document.forms[1].profissao.value.toLowerCase();
    let localidade = document.forms[1].localidade.value.toLowerCase();

    limparDadosConsulta();  
    
    if(profissao || localidade){
        let tabela = "<table id='empregos_consultas' border='1'>"+
                        "<tr>"+
                            "<th>Profissao</th>"+
                            "<th>Ofertante</th>"+
                            "<th>Local</th>"+
                            "<th>Portifólio</th>"+
                            "<th>Data de inclusão</th>"+
                        "</tr>";
        for(i = 0; i < size_empregos; i++){

            let isProfissao, isLocalidade = false;
            if(profissao){
                isProfissao = empregos[i].profissao.toLowerCase().includes(profissao);
            }

            if(localidade){
                isLocalidade = empregos[i].localidade.toLowerCase().includes(localidade);
            }

            if(isProfissao || isLocalidade){
                tabela = tabela + ("<tr>"+
                                    "<td>"+empregos[i].profissao+"</td>"+
                                    "<td>"+empregos[i].nome+"</td>"+
                                    "<td>"+empregos[i].localidade+"</td>"+
                                    "<td>"+"<a href>"+empregos[i].curriculo+"</a>"+"</td>"+
                                    "<td>"+empregos[i].data+"</td>"+
                                "</tr>");
            }
        }

        tabela = tabela + "</table>";
        document.getElementById("aux").innerHTML=tabela;
    }else{
        alert("Digite algum valor para consultar!")
    }  

    // var tabela = "<table id='empregos_consultas' border='1'>" +
    //         "<tr><th>Profissao</th>" +
    //         "<th>Nome</th>" +
    //         "<th>Localidade</th>" +
    //         "<th>Curriculo</th>" +
    //         "<th>Data</th></tr>";
    // for(i = 0; i < size_empregos; i++)
    // {
    // if(_profissao == empregos[i].profissao || _localidade == empregos[i].localidade)
    // {
    //     tabela = tabela + ("<tr>" + "<td>" +
    //     empregos[i].profissao + "</td>" +
    //     "<td>" +
    //     empregos[i].nome + "</td>" +
    //     "<td>" +
    //     empregos[i].localidade + "</td>" +
    //     "<td>" +
    //     empregos[i].curriculo + "</td>" +
    //     "<td>" +
    //     empregos[i].data + "</td>" +
    //     "</tr>");
    // }
    // }
    // tabela = tabela + "</table>";
    // document.getElementById("aux").innerHTML=tabela;
}

function mostraDivs(id){

    if(id == 'home'){
        // document.getElementById('register').style.background="#00ADCD";
        // document.getElementById('select').style.background="#00ADCD";
        document.getElementById('home').style.background= "#0aa0db";
        document.getElementById('index').style.display='block';
        document.getElementById('consultar').style.display='none';
        document.getElementById('registrar').style.display='none';
    }

    if (id=='registrar'){
        // document.getElementById('index').style.display='none';
        // document.getElementById('consultar').style.display='none';
        // document.getElementById('registar').style.display='block';
        // document.getElementById('confirmacao').innerHTML="";

        // document.getElementById('register').style.background="#003E6B";
        // document.getElementById('select').style.background="#00ADCD";
        document.getElementById('home').style.background= "#0aa0dbD";
        document.getElementById('index').style.display='none';
        document.getElementById('consultar').style.display='none';
        document.getElementById('registrar').style.display='block';
        document.getElementById('confirmacao').innerHTML="";
    }

    if (id=='consultar'){
        // document.getElementById('index').style.display='none';
        // document.getElementById('registar').style.display='none';
        // document.getElementById('consultar').style.display='block';

        // document.getElementById('register').style.background="#00ADCD";
        // document.getElementById('select').style.background="#003E6B";
        document.getElementById('home').style.background= "#0aa0db";
        document.getElementById('index').style.display='none';
        document.getElementById('registrar').style.display='none';
        document.getElementById('consultar').style.display='block';
    }
    console.log(id = 'consultar')
}