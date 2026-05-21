const params=
new URLSearchParams(
window.location.search
);

const id=
params.get("id");

fetch("artigos-completos.json")

.then(r=>r.json())

.then(lista=>{

const artigo=
lista.find(
x=>x.id==id
);

if(!artigo){

conteudo.innerHTML=
"Artigo não encontrado";

return;

}

titulo.innerText=
artigo.title;

conteudo.innerHTML=
artigo.contentHtml;

});
