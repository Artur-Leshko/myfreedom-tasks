let button = document.querySelector('button');

// button.addEventListener('click', async function(event) {
//     try {
//         let requset = await fetch(`https://todoappexamplejs.herokuapp.com/items/1178`, {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({title: 'lol'})
//         })
//         requset = await requset.json();

//         if(requset.title === undefined) {
//             let err = new Error('Ошибка!');
//             throw err;
//         }
        
//         console.log('Успех!');
//     } catch(e) {
//         console.log(e);
//     } finally {
//         console.log('Конец!');
//     }
// });

button.addEventListener('click', function(event) {
    let requset = fetch('https://todoappexamplejs.herokuapp.com/items/115', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: 'lol'})
    })

    requset.then(response => {
        if(!response.ok) {
            throw response;
        }
        return response.json();
    }).then(data => console.log('Успех!')).catch(err => {
        console.log('Ошибка!');
        err.text().then(errorMessage => console.log(errorMessage));
    })
})

