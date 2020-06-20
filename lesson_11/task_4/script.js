document.addEventListener('DOMContentLoaded', function(event) {
    function sortArray(array) {
        let new_array = [];
        let trigger;

        for (let i = 0; i < array.length; i++) {
            trigger = true;
            for (let j = 0; j < new_array.length; j++) {
                if (array[i] === new_array[j]) {
                    trigger = false;
                    break;
                }
            }
            if(trigger) new_array.push(array[i]);
        }

        return new_array;
    }

    let array = [1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5];
    let result = '';
    
    console.log(array);
    array = sortArray(array);
    for (let element of array) {
        result += element + ', ';
    }
    console.log(result);
});
