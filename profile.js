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

function showUserGithub(user, data) {
    if (!user) return;
    let divName = document.createElement('div');
    let divImage = document.createElement('img');
    let divRepositories = document.createElement('div');
    divImage.id = "avatar";

    divRepositories.innerText = user.name;
    divImage.src = user.avatar_url;
    divName.innerText = user.login;
    
    document.body.appendChild(divImage);
    document.body.appendChild(divName);

    document.body.appendChild(divRepositories);
}