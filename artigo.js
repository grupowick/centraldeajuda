const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function carregarArtigo(){

try{

const resposta = await fetch("artigos-completos.json");

const lista = await resposta.json();

console.log(lista);

const artigo = lista.find(
x => String(x.id) === String(id)
);

if(!artigo){

document.getElementById("titulo")
.innerText="Artigo não encontrado";

document.getElementById("conteudo")
.innerHTML="ID: "+id;

return;

}

document.getElementById("titulo")
.innerText=artigo.title;


let html = artigo.contentHtml || "";

html = html.replace(
/class="[^"]*"/g,
""
);

html = html.replace(
/style="[^"]*"/g,
""
);

document.getElementById("conteudo")
.innerHTML=html;


}catch(e){

console.log(e);

document.getElementById("titulo")
.innerText="Erro";

document.getElementById("conteudo")
.innerHTML=e;

}

}

carregarArtigo();
