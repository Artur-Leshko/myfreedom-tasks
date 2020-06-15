document.addEventListener('DOMContentLoaded', function() {
    let request = new XMLHttpRequest();

    request.onload = function() {
        let requestObject = JSON.parse(request.responseText);
        let todayDiv = document.querySelector('.today');
        let ul = document.querySelector('ul');

        // appending elements to todayTop
        let todayTop = document.createElement('div');
        todayTop.className = 'todayTop';
        let region = document.createElement('div');
        
        region.className = 'region';
        region.textContent = requestObject.city.name + ', ' + requestObject.city.country;
        region.style.color = '#fff';
        region.style.fontFamily = 'Georgia';
        region.style.fontSize = '20px';
        region.style.fontWeight = '600';

        todayTop.appendChild(region);

        let time = document.createElement('div');

        time.className = 'time';
        time.textContent =  '00:00';
        time.style.color = '#fff';
        time.style.fontFamily = 'Georgia';
        time.style.fontSize = '20px';
        time.style.fontWeight = '600';

        todayTop.appendChild(time);
        todayDiv.appendChild(todayTop);

        // appending elements to todayMiddle
        let todayMiddle = document.createElement('div');
        todayMiddle.className = 'toadayMiddle';
        todayMiddle.style.marginTop = '50px';
        todayMiddle.style.marginBottom = '50px';

        let todayImage = document.createElement('img');
        todayImage.className = 'todayImage';
        todayImage.setAttribute('src', "http://openweathermap.org/img/w/" + requestObject.list[0].weather[0].icon + ".png");
        todayImage.setAttribute('alt', '');
        todayImage.style.display = 'block';
        todayImage.style.margin = '0 auto';
        todayImage.style.marginBottom = '10px';
        todayMiddle.appendChild(todayImage);

        let todayWeatherDescription = document.createElement('div');
        todayWeatherDescription.className = 'todayWeatherDescription';
        todayWeatherDescription.textContent = requestObject.list[0].weather[0].description[0].toUpperCase() + requestObject.list[0].weather[0].description.slice(1);
        todayWeatherDescription.style.color = '#fff';
        todayWeatherDescription.style.fontFamily = 'Georgia';
        todayWeatherDescription.style.fontSize = '20px';
        todayWeatherDescription.style.fontWeight = '600';
        todayWeatherDescription.style.textAlign = 'center';
        todayMiddle.appendChild(todayWeatherDescription);

        let todayTemperature = document.createElement('div');
        todayTemperature.className = 'todayTemperature';
        todayTemperature.textContent = Math.floor(requestObject.list[0].main.temp - 273) + '°C';
        todayTemperature.style.color = '#fff';
        todayTemperature.style.fontFamily = 'Georgia';
        todayTemperature.style.fontSize = '30px';
        todayTemperature.style.fontWeight = '600';
        todayTemperature.style.textAlign = 'center';
        todayMiddle.appendChild(todayTemperature);

        todayDiv.appendChild(todayMiddle);

        // appending elements to todayBottom
        let todayBottom = document.createElement('div');
        todayBottom.className = 'todayBottom';
        todayBottom.style.width = '80%';
        todayBottom.style.margin = '0 auto';
        todayBottom.style.display = 'flex';
        todayBottom.style.justifyContent = 'space-between';

        let windDirection = document.createElement('div');
        windDirection.className = 'windDirection';
        if (requestObject.list[0].wind.deg >= 60 && requestObject.list[0].wind.deg <= 120) {
            windDirection.textContent = 'North';
        } else if (requestObject.list[0].wind.deg > 120 && requestObject.list[0].wind.deg < 150) {
            windDirection.textContent = 'North-West';
        } else if (requestObject.list[0].wind.deg >= 150 && requestObject.list[0].wind.deg <= 210) {
            windDirection.textContent = 'West';
        } else if (requestObject.list[0].wind.deg > 210 && requestObject.list[0].wind.deg < 240) {
            windDirection.textContent = 'South-West';
        } else if (requestObject.list[0].wind.deg >= 240 && requestObject.list[0].wind.deg <= 300) {
            windDirection.textContent = 'South';
        } else if (requestObject.list[0].wind.deg > 300 && requestObject.list[0].wind.deg < 330) {
            windDirection.textContent = 'South-East';
        } else if (requestObject.list[0].wind.deg >= 330 && requestObject.list[0].wind.deg <= 360 || requestObject.list[0].wind.deg >= 0 && requestObject.list[0].wind.deg <= 30) {
            windDirection.textContent = 'East';
        } else {
            windDirection.textContent = 'North-East';
        }
        windDirection.style.color = '#fff';
        windDirection.style.fontFamily = 'Georgia';
        windDirection.style.fontSize = '20px';
        windDirection.style.fontWeight = '600';
        todayBottom.appendChild(windDirection);

        let windSpeed = document.createElement('div');
        windSpeed.className = 'windDirection';
        windSpeed.textContent =  requestObject.list[0].wind.speed + ' m/s';
        windSpeed.style.color = '#fff';
        windSpeed.style.fontFamily = 'Georgia';
        windSpeed.style.fontSize = '20px';
        windSpeed.style.fontWeight = '600';
        todayBottom.appendChild(windSpeed);

        todayDiv.appendChild(todayBottom);

        // appending elements to ul

        for (let i = 1; i < 40; i++) {
            let li = document.createElement('li');
            li.style.padding = '5px 10px';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';
            li.style.border = '2px solid #46e06f';
            li.style.borderTop = 'none';

            let date = document.createElement('div');
            date.innerHTML = requestObject.list[i].dt_txt.slice(0, 10) + '<br>' + requestObject.list[i].dt_txt.slice(-7);
            date.style.color = 'black';
            date.style.fontFamily = 'Georgia';
            date.style.fontSize = '16px';
            date.style.fontWeight = '500';
            li.appendChild(date);

            let liImage = document.createElement('img');
            liImage.setAttribute('src', "http://openweathermap.org/img/w/" + requestObject.list[i].weather[0].icon + ".png");
            liImage.setAttribute('alt', '');
            li.appendChild(liImage);

            let liTemperature = document.createElement('div');
            liTemperature.textContent = Math.floor(requestObject.list[i].main.temp - 273) + '°C';
            liTemperature.style.color = 'black';
            liTemperature.style.fontFamily = 'Georgia';
            liTemperature.style.fontSize = '16px';
            liTemperature.style.fontWeight = '500';
            li.appendChild(liTemperature);

            ul.appendChild(li);
        }

        console.log(requestObject);
    }

    request.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
    request.send();
});
