let artigos=[];

fetch("artigos.json")

.then(r=>r.json())

.then(dados=>{

artigos=dados;

mostrar(artigos)

})

.catch(()=>{

resultado.innerHTML=`
<div class="card">
<h2>Nenhum artigo encontrado</h2>
<p>Aguardando sincronização do Movidesk.</p>
</div>
`

})

function mostrar(lista){

let html='';

lista.forEach(item=>{

html += `

<div class="card">

<h2>${item.subject || "Sem título"}</h2>

<p>${item.summary || ""}</p>

</div>

`;

})

resultado.innerHTML=html;

}

pesquisa.addEventListener("input",()=>{

const filtro=
pesquisa.value.toLowerCase();

const encontrados=
artigos.filter(x=>

(x.subject || "")
.toLowerCase()
.includes(filtro)

)

mostrar(encontrados)

})
