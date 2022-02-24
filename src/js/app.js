import fetchData from './utils/fetchData.js';
// 1dd16d0355176cfb236fb82b9bf1292eba2c6594346fae80605f6adf569c383e1977641f5
// 696AE4745FE86EA2A721BB609F60A1EA

const API = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=100&ts=1&apikey=46fae80605f6adf569c383e1977641f5&hash=696ae4745fe86ea2a721bb609f60a1ea';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const resultsArr = data.data.results;
        const container = document.querySelector('.spiders__cards');
        let contentHTML = '';

        resultsArr.forEach(element => {
            contentHTML += `
            <div class="spiders-card">
                <div class="spiders-card__img">
                    <a href="${element.urls[0].url}" target="_blank"></a>
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}">                                
                    </a>
                </div>
                    <span><a href="${element.urls[0].url}" target="_blank">${element.name}</a></span>
            </div>`
        });

        container.innerHTML = contentHTML;
    
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);