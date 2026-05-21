let artigos=[];
let categoriaAtual="Todos";

fetch("artigos.json")

.then(r=>r.json())

.then(dados=>{

artigos=dados;

criarAbas();

mostrar();

})

function criarAbas(){

let categorias=["Todos"];

artigos.forEach(a=>{

if(a.category?.length){

a.category.forEach(c=>{

if(
!categorias.includes(
c.name
)
){

categorias.push(
c.name
)

}

})

}

})

let html='';

categorias.forEach(cat=>{

html+=`

<div
class="
aba
${cat==="Todos"?"ativa":""}
"

onclick="
selecionar('${cat}')
">

${cat}

</div>

`;

})

abas.innerHTML=html;

}

function selecionar(cat){

categoriaAtual=cat;

document
.querySelectorAll(".aba")
.forEach(x=>
x.classList.remove(
"ativa"
))

event.target
.classList.add(
"ativa"
)

mostrar();

}

function mostrar(){

const busca=
pesquisa.value
.toLowerCase();

let lista=
artigos.filter(item=>{

let categoriaOk=
categoriaAtual==="Todos"

||

item.category?.some(
x=>
x.name===categoriaAtual
)

let buscaOk=

(item.title||"")
.toLowerCase()
.includes(busca);

return categoriaOk
&& buscaOk;

})

let html='';

lista.forEach(item=>{

html+=`

<div
class="card"

onclick="
abrir(
${item.id}
)
">

<div class="categoria">

${item.category?.[0]?.name
||
"Sem categoria"}

</div>

<h2>

${item.title}

</h2>

<p>

${item.summary
||
"Clique para abrir"}

</p>

</div>

`;

})

resultado.innerHTML=html;

}

pesquisa
.addEventListener(
"input",
mostrar
);

function abrir(id){

window.location=
`artigo.html?id=${id}`

}
