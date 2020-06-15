document.addEventListener('DOMContentLoaded', function(){
    let obj = {name: 'Alex', age: 20, phone: '+375334567899'};

    if(!obj.phone && !obj.name) {
        var {name = 1 , phone = 2, ...fields} = obj;
    } else if (!obj.phone) {
        var {name, phone = 1, ...fields} = obj;
    } else if (!obj.name) {
        var {name = 1, phone, ...fields} = obj;
    } else {
        var {name, phone, ...fields} = obj;
    }

    console.log(name);
    console.log(phone);

    for (let element in fields) {
        console.log(element + ': ' + fields[element]);
    }

});
