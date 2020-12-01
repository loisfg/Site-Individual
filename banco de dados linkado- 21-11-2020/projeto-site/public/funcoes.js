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
       
        validar_sessao();
        // alert("acerto " + nome_usuario);
        return true;
    }
    
}


function mensagem() {
    usericon.innerHTML = `Bem vindo`;
        setInterval(
            function myFunction(){
                var frases = ['Oi, ','Aobaa, ','Olá, ', 'Saudações, ', ' Dattebayo ,', 'Como estás? '];
                for (let i = 0; i < 2; i++) {
                var randomico = Number(Math.trunc(Math.random() * 6))
                usericon.innerHTML = `${frases[randomico]}` + `${nome_usuario}!`;
            }
        },5000)

    exit.style = `display:block;`;
};


function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    // redirecionar_login();
    alert ('Vamos sentir sua falta 😩');
    window.location.href = 'index.html';
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