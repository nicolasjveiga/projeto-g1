document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".sidenav");M.Sidenav.init(e)}),fetch("https://newsapi.org/v2/top-headlines?country=pt&apiKey=4c9872180ebd4bd392bb9a19291d083b").then(e=>{if(!e.ok)throw Error("Erro na resposta da API");return e.json()}).then(e=>{console.log(e);let t=document.getElementById("news-container");t.innerHTML="",e.articles.forEach(e=>{let n=`
                <div class="col s12 m4 14">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${e.title}</span>
                        </div>
                    </div>
                </div>
            `;t.innerHTML+=n})});
//# sourceMappingURL=index.c448b22a.js.map
