const listUser = [
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' }
]

function mostrarTabela(){
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const tabela = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaUsuario = document.createElement('th');
    const colunaBotao = document.createElement('th');
    
    tabela.appendChild(linha);

    colunaNome.innerText = 'nome';
    colunaUsuario.innerText = 'Usarname';

    linha.appendChild(colunaNome);
    linha.appendChild(colunaUsuario);
    linha.appendChild(colunaBotao);

    listUser.forEach(function (element){
        const linhaTabela = criarTabela(
            element.name,
            element.userName
        )
            tabela.appendChild(linhaTabela);

    })
    document.body.appendChild(tabela);
}

function mostrarUser(){
    const user = document.createElement('p');
    user.innerText = function(){(getUserGithub(userName))}
}

function criarTabela(name, userName) {
    const botao = document.createElement('button');
    botao.innerHTML = "clique";

    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaUsuario = document.createElement('td');
    const colunaBotao = document.createElement('td');

    botao.onclick = function(){(otherpage(userName))};

    colunaNome.innerText = name;
    colunaUsuario.innerText = userName;
    colunaBotao.appendChild(botao);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaUsuario);
    linha.appendChild(colunaBotao);
    return linha;
}

mostrarTabela();

function otherpage(userName){
    window.location.href = "profile.html?" + userName;
}

function getUserGithub(userName) {
    fetch('https://api.github.com/users/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}

function getUserReposGithub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}