document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

const apiKey = '4c9872180ebd4bd392bb9a19291d083b';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

function truncateText(text, maxLength) {
    if(text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';

        data.articles.forEach(article => {
            if (!article.urlToImage || !article.description){
                console.warn('Artigo ignorado por falta de imagem ou descrição:', article);
                return;
            }
            
            const truncateTitle = truncateText(article.title, 60);
            const truncateDescription = truncateText(article.description, 200);

            const cardHtml = `
                <div class="col s12 m6 14">
                    <div class="card">
                        <div class="card-image">
                            <img src="${article.urlToImage}">
                        </div>
                        <div class="card-content">
                            <a class="card-title">${truncateTitle}</a>
                            <p>${truncateDescription}</p>
                        </div>
                    </div>
                </div>
            `;
            
            newsContainer.innerHTML += cardHtml;
        });
    })

    .catch(error => {
        console.error('Erro:', error);
    });
