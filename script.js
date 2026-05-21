let artigos=[];

fetch("artigos.json")
.then(r=>r.json())

.then(dados=>{

artigos=dados;

mostrar(artigos);

})

.catch(()=>{

resultado.innerHTML=`

<div class="card">

<h2>Erro ao carregar</h2>

<p>Não foi possível carregar artigos</p>

</div>

`

})

function mostrar(lista){

if(lista.length===0){

resultado.innerHTML=`

<div class="card">

<h2>Nenhum artigo encontrado</h2>

</div>

`;

return;

}

let html='';

lista.forEach(item=>{

html += `

<div class="card">

<div class="categoria">
${item.menu?.name || "Base"}
</div>

<h2>${item.title}</h2>

<p>
${item.summary || "Clique para abrir artigo"}
</p>

<button onclick="abrir(${item.id})">
Abrir artigo
</button>

</div>

`;

})

resultado.innerHTML=html;

}

function abrir(id){

window.open(
`https://telmogrupowick.com.br/kb/article/${id}`,
"_blank"
)

}

pesquisa.addEventListener("input",()=>{

const termo=
pesquisa.value.toLowerCase();

const filtrado=
artigos.filter(item=>{

const titulo=
(item.title || "")
.toLowerCase();

const resumo=
(item.summary || "")
.toLowerCase();

return titulo.includes(termo)
|| resumo.includes(termo);

});

mostrar(filtrado);

});
