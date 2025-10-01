//puxando a div resultado do html
const divResultado = document.querySelector('#divResultado');
const select = document.querySelector('#selecionarPersonagem');

async function ListarPersonagens(){
  await fetch('https://naruto-br-api.site/characters')
    .then(response => response.json())
    .then(dados => {
      // Limpa e adiciona a primeira opção
      select.innerHTML = `<option value="">Selecione um personagem</option>`;
 
      // Preenche o select com os personagens
      dados.forEach(personagem => {
        select.innerHTML += `<option value="${personagem.id}">${personagem.name}</option>`;
      });
    });
}
           
async function ExibirDados() {
 const id = select.value; // pega o id do personagem escolhido
 
  if (!id) {
    divResultado.innerHTML = `<p>Nenhum personagem selecionado.</p>`;
    return;
  }
 
  // Buscar o personagem específico pelo id
  fetch(`https://naruto-br-api.site/characters/${id}`)
    .then(response => response.json())
    .then(personagem => {
      divResultado.innerHTML = `
        <p><strong>Nome: </strong>${personagem.name}</p>
        <p><strong>Vila: </strong>${personagem.village?.name || "Desconhecida"}</p>
        <p><strong>Classificação: </strong>${personagem.rank || "Não informado"}</p>
        <p><strong>Descrição: </strong>${personagem.summary || "Sem descrição"}</p>
        <div class="imagem">
          <img src="${personagem.profile_image}" alt="${personagem.name}">
        </div>
      `;
    });
 
}

//função para limpar dados do personagem
function LimparDados(){
  divResultado.innerHTML = "";
}



// //puxando a div resultado do html
// const divResultado = document.querySelector('#divResultado');

// //puxando o select do html
// const select = document.querySelector('#selecionarPersonagem');

// let personagens = [];
// async function ListarPersonagens(){
//   const response = await fetch('https://naruto-br-api.site/characters')
//   const dados = response.json()
    
//   personagens = dados;

//   select.innerHTML = "";

//   //for each de dados que irá exibir o nome dos personagens dentro do select
//   personagens.forEach(personagem => {
//     select.innerHTML += `<option value="${personagem.id}">${personagem.name}</option>`;
//   });

//   ExibirDados();
//         //     const valorSelect = select.value;

//         //     console.log(valorSelect)
//         //     divResultado.innerHTML = 
//         //     `<p><strong>Nome: </strong>${dados[valorSelect].name}</p>
//         //     <p><strong>Vila: </strong>${dados[valorSelect].village.name}</p>
//         //     <p><strong>Classificação: </strong>${dados[valorSelect].rank}</p>
//         //     <p><strong>Descrição: </strong>${dados[valorSelect].summary}</p>
//         //     <div class="imagem">
//         //       <img src="${dados[valorSelect].profile_image}" alt="">
//         //     </div>`
//         // });
// }

// function ExibirDados() {
//   const valorIdSelect = select.value;

//   if (valorIdSelect) {
    
//   }
// }

// //função para habilitar o botão de limpar dados do personagem somente quando a div de resultado tiver conteúdo
// function HabilitarBotao(){
//   const botaoLimpar = document.querySelector('#botaoLimpar');
//   botaoLimpar.disabled = false;
// }

// //função para limpar dados do personagem
// function LimparDados(){
//   divResultado.innerHTML = "";
// }

