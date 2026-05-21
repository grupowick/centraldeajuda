const params =
new URLSearchParams(
window.location.search
);

const id =
params.get("id");

fetch("artigos-completos.json")

.then(r=>r.json())

.then(lista=>{

const artigo=
lista.find(
x=>x.id==id
);

if(!artigo){

document
.getElementById("conteudo")
.innerHTML=
"Artigo não encontrado";

return;

}

document
.getElementById("titulo")
.innerText=
artigo.title;

document
.getElementById("conteudo")
.innerHTML=
artigo.contentHtml;

});
