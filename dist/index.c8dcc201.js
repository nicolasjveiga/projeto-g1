function e(e,n){return e.length>n?e.substring(0,n)+"...":e}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".sidenav");M.Sidenav.init(e)}),fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4c9872180ebd4bd392bb9a19291d083b").then(e=>{if(!e.ok)throw Error("Erro na resposta da API");return e.json()}).then(n=>{console.log(n);let r=document.getElementById("news-container");r.innerHTML="",n.articles.forEach(n=>{if(!n.urlToImage||!n.description){console.warn("Artigo ignorado por falta de imagem ou descrição:",n);return}let t=e(n.title,60),o=e(n.description,200),i=`
                <div class="col s12 m4 14">
                    <div class="card">
                        <div class="card-image">
                            <img src="${n.urlToImage}">
                        </div>
                        <div class="card-content">
                            <a class="card-title">${t}</a>
                            <p>${o}</p>
                        </div>
                    </div>
                </div>
            `;r.innerHTML+=i})}).catch(e=>{console.error("Erro:",e)});
//# sourceMappingURL=index.c8dcc201.js.map
