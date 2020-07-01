let names = ['iliakan', 'remy', 'jeresig'];
let promises = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(promises).then(responses => Promise.all(responses.map(r => r.json()))).then(users => {
    for(let i = 0; i < 2; i++) {
        for(let element of users) {
            console.log(element.name);
        }
    }
})
