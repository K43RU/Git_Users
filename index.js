function botao(){
    let clicar = document.createElement('button');
    document.body.appendChild(clicar);
    clicar.innerHTML = "clique aqui";
    clicar.onclick = mostrarTabela;
}

botao();

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

    colunaNome.innerText = "nome";
    colunaUsuario.innerText = "Usarname";

    linha.appendChild(colunaNome);
    linha.appendChild(colunaUsuario);

    listUser.forEach(function (element){
        console.log('element', element);
        const linhaTabela = criarTabela(
            element.name,
            element.userName
        )

            tabela.appendChild(linhaTabela)

    })
    document.body.appendChild(tabela);
}

function criarTabela(name, userName) {

    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaUsuario = document.createElement('td');

    colunaNome.innerText = name;
    colunaUsuario.innerText = userName;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaUsuario);
    return linha;
}