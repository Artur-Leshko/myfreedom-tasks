document.addEventListener('DOMContentLoaded', function() {
    let arrayOfNames = ['Artur', 'Pasha', 'Masha', 'Misha'];
    if (arrayOfNames.length >= 2) {
        let [firstName, secondName] = arrayOfNames;
        let [,,...otherNames] = arrayOfNames;

        console.log('Два первых имени: ');
        console.log(firstName, secondName);
    
        console.log('Остальные имена: ');
        for (let element of otherNames) {
            console.log(element);
        }
    } else {
        let [firstName, secondName = 'Alex'] = arrayOfNames;

        console.log('Два первых имени: ');
        console.log(firstName, secondName);
    }
});
