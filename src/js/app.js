import fetchData from './utils/fetchData.js';

const spidersAPI = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=100&ts=1&apikey=46fae80605f6adf569c383e1977641f5&hash=696ae4745fe86ea2a721bb609f60a1ea';
const comicsAPI = 'https://gateway.marvel.com:443/v1/public/comics?dateRange=2021-02-24%2C2022-02-24&titleStartsWith=spider&orderBy=-onsaleDate&limit=21&ts=1&apikey=46fae80605f6adf569c383e1977641f5&hash=696ae4745fe86ea2a721bb609f60a1ea';

const spidersData = async(url_api) => {
    try {
        const data = await fetchData(url_api);
        const resultsArr = data.data.results;
        const container = document.querySelector('.spiders__cards');
        const resultsCountText = document.querySelector('.spiders__results');
        let contentHTML = '';

        resultsArr.forEach(element => {
            contentHTML += `
            <div class="spiders-card card">
                <div class="spiders-card__img card__img">
                    <a href="${element.urls[0].url}" target="_blank">
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}">                                
                    </a>
                </div>
                    <span><a href="${element.urls.length ? element.urls[0].url : 'http://marvel.com'}" target="_blank">${element.name}</a></span>
            </div>`
        });

        container.innerHTML = contentHTML;
        resultsCountText.innerHTML = `Results: ${resultsArr.length} spiders`;
    
    } catch (error) {
        console.error(error);
    }
}

const comicsData = async(url_api) => {
    try {
        const data =  await fetchData(url_api);
        const resultsArr = data.data.results;
        const container = document.querySelector('.comics__cards');
        let contentHTML = '';

        resultsArr.forEach(element => {
            contentHTML += `
            <div class="comics-card card">
                <div class="comics-card__img card__img">
                    <a href="${element.urls[0].url}" target="_blank">
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.title}">                                
                    </a>
                </div>
                    <span><a href="${element.urls.length ? element.urls[0].url : 'http://marvel.com'}" target="_blank">${element.title}</a></span>
            </div>`
        });

        container.innerHTML = contentHTML;

    } catch (error) {
        console.error(error);
    }
}

spidersData(spidersAPI);
comicsData(comicsAPI);

//Loader

window.addEventListener('load', function() {
    document.getElementById('loader').classList.toggle('loader-end');
})