let translit = {а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'j', з: 'z', и: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', x: 'h', ц: 'c', ч: 'ch', ш: 'sh', э: 'a', ю: 'u', я: 'ya'};

async function all() {
    let promise = await fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    promise = await promise.json();
    console.log(promise);

    let translate = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=${promise.value}&lang=en-ru&format=plain`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    translate = await translate.json();
    console.log(translate);

    let words = translate.text[0].split(' ');
    let aWord;
    let firstLetter;
    console.log(words);

    for(let element of words) {
        if(element.includes('а')) {
            aWord = element.toLowerCase();
            break;
        }
    }
    console.log(aWord);

    for(let element in translit) {
        if(aWord[0] == String(element)) {
            firstLetter = translit[element];
            break;
        }
    }
    console.log(firstLetter);

    let cities = await fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    cities = await cities.json();
    console.log(cities);

    let state;
    for(let element of cities) {
        if(element.City.includes(`${firstLetter}`)) {
            state = element.State;
            break;
        }
    }
    console.log(state);

    let temperature = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=a94d0a5ac08570add4b47b8da933f247`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    temperature = await temperature.json();
    
    temperature = temperature.main.temp - 273;
    console.log(temperature);

    setTimeout(() => console.log(`Готово! (${temperature})`), temperature*1000);
}

all();
