 /* 
    Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.
    
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele.

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado.

    Passo 3 - pegar o clique do usuário no JS.

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça.

    Objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
   
    Passo 1 - verificar se o botão já está aberto, se sim, remover a classe ativo para que ele escona o conteúdo novamente.
 */

//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.

//Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele.
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas =document.querySelector(".btn-plataforma .plataformas")


botao.addEventListener("click" , () => {
     elementoPlataformas.classList.toggle("ativo");
   

});
