document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

const apiKey = '4c9872180ebd4bd392bb9a19291d083b';
const url = `https://newsapi.org/v2/top-headlines?country=it&apiKey=${apiKey}`;




fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
        
        data.articles.forEach(article => {
            
            const cardHtml = `
                <div class="col s12 m4 14">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${article.title}</span>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.innerHTML += cardHtml;
        });
    });
    