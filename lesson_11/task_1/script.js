document.addEventListener('DOMContentLoaded', function(event) {
    function addLi (items, item) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        let videoImg = document.createElement('img');

        li.style.display = 'inline-block';
        li.style.marginLeft = '10px';

        videoImg.style.maxWidth = '100%';
        videoImg.setAttribute('src', item.snippet.thumbnails.medium.url);
        videoImg.setAttribute('alt', '');

        link.setAttribute('href', '#');
        link.addEventListener('click', function(event) {
            li.remove();
            let newVideo = document.createElement('iframe');
            let mainVideo = document.querySelector('.main__video');
            
            let number = 0;

            for (let i = 0; i < items.length; i++) {
                if (`https://www.youtube.com/embed/${items[i].id.videoId}` == mainVideo.getAttribute('src')) {
                    number = i;
                    break;
                }
            }

            document.querySelector('ul').appendChild(addLi(items, items[number]));
            mainVideo.remove();

            newVideo.setAttribute('width', 560);
            newVideo.setAttribute('height', 315);
            newVideo.setAttribute('src', `https://www.youtube.com/embed/${item.id.videoId}`);
            newVideo.setAttribute('frameborder', 0);
            newVideo.setAttribute('allow', 'autoplay; encrypted-media');
            newVideo.setAttribute('allow', 'fullscreen');
            newVideo.className = 'main__video';

            document.querySelector('ul').insertAdjacentElement('beforebegin', newVideo);
        });
        link.appendChild(videoImg);

        li.appendChild(link);

        return li;
    }

    function add_others(items) {
        let ul = document.createElement('ul');
        ul.style.listStyle = 'none';

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        for (let i = 1; i < items.length; i++) {
            ul.appendChild(addLi(items, items[i]));
        }

        document.body.appendChild(ul);
    }

    let button = document.querySelector('button');
    let input = document.querySelector('input');
    let body = document.querySelector('body');

    button.addEventListener('click', (event) => {
        let promise = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDvbK-PxwME8z9K4HyXcHK5_82S4PaFTL4&q=${input.value}&type=video`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json' 
            }
        })

        promise.then(response => response.json()).then(data => {
            console.log(data);
            let serchVideo = document.querySelector('iframe');
            if (serchVideo)  {
                serchVideo.remove();
                for (let i = 0; i < 4; i++) {
                    document.querySelector('br').remove();
                }
                document.querySelector('ul').remove();
            }
            let video = document.createElement('iframe');

            video.setAttribute('width', 560);
            video.setAttribute('height', 315);
            video.setAttribute('src', `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
            video.setAttribute('frameborder', 0);
            video.setAttribute('allow', 'autoplay; encrypted-media');
            video.setAttribute('allow', 'fullscreen');
            video.className = 'main__video';

            body.appendChild(document.createElement('br'));
            body.appendChild(document.createElement('br'));
            body.appendChild(video);

            add_others(data.items);
        })

        input.value = '';
    });
});
