//Funçao para aparecer o model
function CriarNovo() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}
//___________________________________________________________________________________________________________________

//funçao para validar se todos os dados foram preenchidos
function validarFormulario() {
  var nome = document.getElementById("ModelsNome").value;
  var feito = document.getElementById("ModelsFeito").value;
  var entregue = document.getElementById("ModelsEntregue").value;
  
  if (nome == "" || feito == "" || entregue == "") {
    alert("Preencha todos os campos obrigatórios!");
    return false;
  }
  return true;
}
//___________________________________________________________________________________________________________________

function Criar(nome, pedidoFeito, pedidoEntregue, descricao) {
  //criando a tabela
  let tb = document.getElementById("tbPessoas")
  let qtdeLinhas = tb.rows.length
  let linha = tb.insertRow(qtdeLinhas)
  
  //criando as colunas da tabela
  let colunaCodigo = linha.insertCell(0)
  let colunaNome = linha.insertCell(1)
  let colunaPedidoFeito = linha.insertCell(2)
  let colunaPedidoEntregue = linha.insertCell(3)
  let colunaDescriçao = linha.insertCell(4)

  //inserindo os dados nas colunas
  colunaCodigo.innerHTML = qtdeLinhas
  colunaNome.innerHTML = nome
  colunaPedidoFeito.innerHTML = pedidoFeito
  colunaPedidoEntregue.innerHTML = pedidoEntregue
  colunaDescriçao.innerHTML = descricao

}
//função para o botão de fechar a model
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}
//___________________________________________________________________________________________________________________




