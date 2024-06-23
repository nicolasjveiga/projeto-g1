document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".sidenav");M.Sidenav.init(e)}),fetch("https://newsapi.org/v2/top-headlines?country=de&apiKey=4c9872180ebd4bd392bb9a19291d083b").then(e=>{if(!e.ok)throw Error("Erro na resposta da API");return e.json()}).then(e=>{console.log(e);let n=document.getElementById("news-container");n.innerHTML="",e.articles.forEach(e=>{let t=`
                <div class="col s12 m4 14">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${e.title}</span>
                        </div>
                    </div>
                </div>
            `;n.innerHTML+=t})});
//# sourceMappingURL=index.a8dfe9d0.js.map
