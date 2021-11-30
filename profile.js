const user = document.location.search;
const userName = user.replace('?', '');
aparecer();
function aparecer(){(getUserGithub(userName))};
aparecerRepositorio();
function aparecerRepositorio(){(getUserReposGithub(userName))};

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
    let divImage = document.createElement('img');
    divImage.id = "avatar";

    divImage.src = user.avatar_url;
    divName.innerText = user.login;
    
    document.body.appendChild(divImage);
    document.body.appendChild(divName);
}

function getUserReposGithub(user) {
    
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (dataRepositorio) {
                dataRepositorio.forEach(function (element) {

                    const line = document.createElement('div')
                    line.id = "line";
                    document.body.appendChild(line);
                    line.innerText = element.name;
                });
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}