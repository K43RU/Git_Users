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
                showRepos(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showRepos(repos){
    if (!repos) return;
    let divRepositories = document.createElement('div');
    var i;
    for(i = 0; i <= 2; i++){
    divRepositories.innerText = repos.name;
    document.body.appendChild(divRepositories);
    }
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