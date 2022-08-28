 const elementoResposta = document.querySelector ("#resposta")
 const inputPergunta = document.querySelector ("#pergunta")
 const botaoPerguntar = document.querySelector ("#BotaoPerguntar")

 const respostas = [

  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "deixe-me pensar... está claro que sim!",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",]

 

// clicar em fazer pergunta (onclick no buton no html, la ela vai executar a função)
function fazerPergunta() {
if(inputPergunta.value == ""){
alert("Digite sua Pergunta")
return
}

botaoPerguntar.setAttribute('disabled', true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

    //gerar numero aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

// sumir a respostas apos  3 segundos
elementoResposta.style.opacity= 1;

setTimeout(function() {
  elementoResposta.style.opacity= 0;
  botaoPerguntar.removeAttribute('disabled')
}, 3000)


}







