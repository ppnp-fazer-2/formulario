const formularioDados = document.getElementById('formulario');

function obterDados() {
    const nome = document.getElementById('nome').value
    let ocupacaoFinal = [];
    let ocupacao = document.getElementsByName('ocupacao');
    for(let i = 0; i < ocupacao.length; i++){
      if(ocupacao[i].checked) {
        ocupacaoFinal.push(ocupacao[i].value)
      }
    }
    const email = document.getElementById('email').value

    return {
        nome,
        ocupacaoFinal,
        email
    }
}

formularioDados.addEventListener('submit', function(event){
  event.preventDefault();

  const sectionDoAluno = document.getElementById("info-aluno");

  let nome = document.createElement("p")
  nome.innerHTML = "Nome: " + obterDados().nome;

  let ocupacao = document.createElement("p")
  ocupacao.innerHTML = "Ocupação: " + obterDados().ocupacaoFinal;

  let email = document.createElement("p")
  email.innerHTML = "Email: " + obterDados().email;

  sectionDoAluno.appendChild(nome)
  sectionDoAluno.appendChild(email)
  sectionDoAluno.appendChild(ocupacao)

  document.getElementById('resultado-aluno').style.display = "flex"
  window.scrollTo({
    top: 10000,
    behavior: 'smooth'
  })
})