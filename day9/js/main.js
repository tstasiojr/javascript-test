// fetch('https://60e2c52d7d58.ngrok.io/')
// .then(function(response) {
//     return response.json();
// })
// .then(function( data ) {
//     console.log(data);
// })

function api(endpoint = '', data) {
    return fetch('https://93871b15454e.ngrok.io/' + endpoint, {
        method: data ? "POST" : "GET",
        body: data,
        headers: {'content-type': 'application/json'},
    })
    .then(function (res) {
    return res.json();
    })
}

const getUsersButton = document.querySelector('#getUsers');
const sendUserNameInput = document.querySelector('#sendUserNameInput');
const sendUserNameButton = document.querySelector('#sendUserButton');
const userAgeInput = document.querySelector('#userAgeInput')

sendUserButton.innerText = 'Send User';

getUsersButton.addEventListener( 'click', () => {
    api('users')
    .then( data => data.users)
    .then( users => console.log(users));
})

sendUserButton.addEventListener( 'click', () => {
    const username = sendUserNameInput.value;
    const age = Number(userAgeInput.value);

    if (!username || !age) {
        return;
    }

    console.log('this wont happen unless there is a username', username);

    api('users', JSON.stringify({user: { username, age } }) ).then( data => console.log('post', data));
});
