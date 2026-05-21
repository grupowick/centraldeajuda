let artigos=[];

fetch("artigos.json")
.then(r=>r.json())
.then(dados=>{

artigos=dados;

mostrar(artigos)

})

function mostrar(lista){

let html='';

lista.forEach(item=>{

html+=`

<div class="card">

<h2>${item.title || "Sem título"}</h2>

<p>${item.summary || ""}</p>

</div>

`;

})

resultado.innerHTML=html;

}
