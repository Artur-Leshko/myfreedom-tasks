function sortByName(users) {
    let temp;

    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i].name[0] > users[j].name[0]) {
                temp = users[i];
                users[i] = users[j];
                users[j] = temp;
            }
        }
    }
    return users;
}

let users = [
    {
    name: "Женя",
    phone: "+375295012091",
    operator: "МТС"
    },
    {
    name: "Вася",
    phone: "+375299876543",
    operator: "МТС"
    },
    {
    name: "Татьяна",
    phone: "+375299001122",
    operator: "Velcom"
    },
    {
    name: "Аня",
    phone: "+375291234567",
    operator: "Velcom"
}];
let result = '';

users = sortByName(users);
for (let i = 0; i < users.length; i++) {
    result += users[i].name + ', ';
}
alert(`Отсортированный по именам массив: ${result}`);
