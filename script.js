let artigos=[];
let categoriaAtual="Todos";

/*
PERFIS:
SAC
Financeiro
Negociação
Comercial
Backoffice1
Backoffice2
Gerente
Cursos
Processos
DOCS
*/

const perfil=
localStorage.getItem("perfil")
|| "SAC";


const permissoes={

"SAC":[
"1. SAC"
],

"Financeiro":[
"2. Financeiro",
"3. Negociação"
],

"Comercial":[
"4. Comercial"
],

"Backoffice1":[
"5. Backoffice 1"
],

"Backoffice2":[
"6. Backoffice 2"
],

"Gerente":[
"1. SAC",
"2. Financeiro",
"3. Negociação",
"4. Comercial",
"5. Backoffice 1",
"6. Backoffice 2",
"7. Gerente Comercial",
"8. Cursos",
"9. Processos/Sistemas",
"10. DOCS"
]

};

fetch("artigos.json")

.then(r=>r.json())

.then(dados=>{

artigos=dados.filter(artigo=>{

if(!artigo.category?.length)
return false;

return artigo.category.some(c=>

permissoes[perfil]
?.includes(c.name)

);

});

criarAbas();

mostrar();

});

function criarAbas(){

const categorias=[];

artigos.forEach(a=>{

a.category?.forEach(cat=>{

if(
permissoes[perfil]
.includes(cat.name)
&&
!categorias.includes(cat.name)
){

categorias.push(
cat.name
)

}

});

});

categorias.sort();

categorias.unshift("Todos");

abas.innerHTML=
categorias.map(cat=>`

<div
class="aba
${cat==="Todos"?"ativa":""}"

onclick="selecionar('${cat}',this)">

${cat}

</div>

`).join("");

}

function selecionar(cat,el){

categoriaAtual=cat;

document
.querySelectorAll(".aba")
.forEach(x=>
x.classList.remove(
"ativa"
))

el.classList.add(
"ativa");

mostrar();

}

function mostrar(){

const busca=
pesquisa.value
.toLowerCase();

const lista=
artigos.filter(item=>{

const categoriaOk=

categoriaAtual==="Todos"

||

item.category?.some(
x=>
x.name===categoriaAtual
);

const buscaOk=

(item.title||"")
.toLowerCase()
.includes(busca);

return categoriaOk
&& buscaOk;

});

resultado.innerHTML=

lista.map(item=>`

<div
class="card"

onclick="
abrir(${item.id})
">

<div class="categoria">

${item.category
?.map(x=>x.name)
.join(" • ")}

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

`).join("");

}

pesquisa
.addEventListener(
"input",
mostrar
)

function abrir(id){

window.location=
`artigo.html?id=${id}`

}
