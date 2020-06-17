document.addEventListener('DOMContentLoaded', function() {  
    function createVideo(id) {
        let body = document.querySelector('body');
        let video = document.createElement('iframe');

        video.setAttribute('width', 560);
        video.setAttribute('height', 315);
        video.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
        video.setAttribute('frameborder', 0);
        video.setAttribute('allow', 'autoplay');
        video.setAttribute('encrypted-media', 'allowfullscreen');

        body.appendChild(video);
    } 

    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let request = new XMLHttpRequest();
        let inputValue = document.querySelector('input').value;

        request.onload = () => {
            let requestData = JSON.parse(request.responseText);
            let newRequest = new XMLHttpRequest();
        
            newRequest.onload = () => {
                let newRequestData = JSON.parse(newRequest.responseText);
                
                createVideo(newRequestData.items[0].id.videoId);
            }

            newRequest.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDhbHWKQSHIv3kN1a1XSCRWuNmsDJaoys4&q=${requestData.text[0]}&type=video`);
            newRequest.setRequestHeader('Accept', 'application/json');
            newRequest.send();
        }
        
        request.open('GET', `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=${inputValue}&lang=ru-en&format=plain`);
        request.setRequestHeader('Accept', 'application/json');
        request.send();

        document.querySelector('input').value = '';
    });
    
});
