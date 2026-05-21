let artigos = [];

fetch("artigos.json")
  .then(response => response.json())
  .then(dados => {
    artigos = dados;
    mostrar(artigos);
  })
  .catch(() => {
    document.getElementById("resultado").innerHTML = `
      <div class="card">
        <h2>Erro ao carregar artigos</h2>
        <p>Não foi possível carregar os dados.</p>
      </div>
    `;
  });

function mostrar(lista){

  if(lista.length === 0){

    document.getElementById("resultado").innerHTML=`
      <div class="card">
        <h2>Nenhum artigo encontrado</h2>
      </div>
    `;

    return;
  }

  let html='';

  lista.forEach(item => {

    html += `
      <div class="card">

        <div class="categoria">
          ${item.menu?.name || "Base"}
        </div>

        <h2>${item.title || "Sem título"}</h2>

        <p>
          ${item.summary || "Clique para abrir artigo"}
        </p>

        <button onclick="abrir(${item.id})">
          Abrir artigo
        </button>

      </div>
    `;

  });

  document.getElementById("resultado").innerHTML = html;
}

function abrir(id){

 window.open(
   `https://telmogrupowick.com.br/kb/article/${id}`,
   "_blank"
 );

}

document.getElementById("pesquisa")
.addEventListener("input", function(){

 const termo = this.value.toLowerCase();

 const filtrado = artigos.filter(item => {

   const titulo =
   (item.title || "").toLowerCase();

   const resumo =
   (item.summary || "").toLowerCase();

   return titulo.includes(termo)
   || resumo.includes(termo);

 });

 mostrar(filtrado);

});
