let login_usuario;
let nome_usuario;

// function redirecionar_login() {
//    window.location.href = 'story.html';
// }

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        // alert("erro");
        window.location.href = 'logincadastro.html';
        return false;
    } else {
        mensagem();
        validar_sessao();
        // alert("acerto " + nome_usuario);
        return true;
    }
    
}

function mensagem() {
    var um = 'Como está,';
    var dois = 'Oi';
    var tres = 'Olá';
    var quatro = 'Como vai,';
    var rand = Number(Math.trunc(Math.random() * 4))
    if (rand == 1) {
        usericon.innerHTML = `${um} ${nome_usuario}`;
        exit.style.display = `block`;
    }else if (rand == 2) {
        usericon.innerHTML = `${dois} ${nome_usuario}`;
        exit.style.display = `block`;
    } else if (rand == 3) {
        usericon.innerHTML = `${tres} ${nome_usuario}`;
        exit.style.display = `block`;
    } else {
        usericon.innerHTML =`${quatro} ${nome_usuario}`;
        exit.style.display = `block`;
    }
}



function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
    alert ('logoff');
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}

function vamosla() {
    box2.style = "display:none";
    box1.style = "display:block";
}
function bt() {
    box1.style = "display:none";
    box2.style = "display:none";
    box3.style = "display:block";
}
function troca() {
    pagina2.style = "display:block";
    pagina3.style = "display:none";
    pagina4.style = "display:none";
}
function troca2() {
    pagina2.style = "display:none";
    pagina3.style = "display:block";
    pagina4.style = "display:none";
}
function troca3() {
    pagina2.style = "display:none";
    pagina3.style = "display:none";
    pagina4.style = "display:block";
}