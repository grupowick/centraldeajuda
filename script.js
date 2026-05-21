let artigos=[];

fetch("artigos.json")
.then(r=>r.json())

.then(dados=>{

console.log("Artigos recebidos:",dados);

artigos = Array.isArray(dados) ? dados : [];

mostrar(artigos);

})

.catch((erro)=>{

console.log(erro);

resultado.innerHTML=`
<div class="card">
<h2>Erro ao carregar artigos</h2>
<p>Verifique artigos.json</p>
</div>
`

})

function mostrar(lista){

if(lista.length===0){

resultado.innerHTML=`

<div class="card">

<h2>Nenhum artigo encontrado</h2>

<p>Os artigos vieram vazios ou o formato está diferente.</p>

</div>

`;

return;

}

let html='';

lista.forEach(item=>{

html+=`

<div class="card">

<div class="categoria">
${item.menu?.name || "Base de conhecimento"}
</div>

<h2>${item.title || "Sem título"}</h2>

<p>${item.summary || "Sem resumo"}</p>

<button onclick="abrir(${item.id})">
Abrir artigo
</button>

</div>

`;

});

resultado.innerHTML=html;

}

function abrir(id){

window.open(
`https://telmogrupowick.com.br/kb/article/${id}`,
"_blank"
)

}

pesquisa.addEventListener("input",()=>{

const filtro=
pesquisa.value.toLowerCase();

const encontrados=
artigos.filter(x=>

(x.title || "")
.toLowerCase()
.includes(filtro)

||

(x.summary || "")
.toLowerCase()
.includes(filtro)

)

mostrar(encontrados)

});
