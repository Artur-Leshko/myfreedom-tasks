let names = ['iliakan', 'remy', 'jeresig'];
let promises = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(promises).then(responses => {
    for(let i = 0; i < 2; i++) {
        for(let element of responses) {
            console.log(element);
        }
    }
}).then(() => {
    for(let i = 0; i < 2; i++) {
        for(let element of names) {
            console.log(element);
        }
    }
})
