//Funçao para aparecer o model
function CriarNovo() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}
//___________________________________________________________________________________________________________________

//funçao para validar se todos os dados foram preenchidos
// function validarFormulario() {
//   var nome = document.getElementById("ModelsNome").value;
//   var feito = document.getElementById("ModelsFeito").value;
//   var entregue = document.getElementById("ModelsEntregue").value;
  
//   if (nome == "" || feito == "" || entregue == "") {
//     alert("Preencha todos os campos obrigatórios!");
//     return false;
//   }
//   return true;
// }
//___________________________________________________________________________________________________________________

function formatarData(data) {
  const dataObj = new Date(data);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dataObj.toLocaleDateString("pt-BR", options);
}

class Pedido {
  constructor(nome, pedidoFeito, pedidoEntregue, descricao) {
    this.nome = nome;
    this.pedidoFeito = pedidoFeito;
    this.pedidoEntregue = pedidoEntregue;
    this.descricao = descricao;
  }
}

function Criar() {
  const nome = document.getElementById("ModelsNome").value;
  const pedidoFeito = document.getElementById("ModelsFeito").value;
  const pedidoEntregue = document.getElementById("ModelsEntregue").value;
  const descricao = document.getElementById("ModelsDescricao").value;

  const tabelaPedidos = document.getElementById("tabelaPedidos");
  tabelaPedidos.classList.add("bordaTabela");
  const newRow = tabelaPedidos.insertRow(-1);

  const cellNome = newRow.insertCell(0);
  const cellPedidoFeito = newRow.insertCell(1);
  const cellPedidoEntregue = newRow.insertCell(2);
  const cellDescricao = newRow.insertCell(3);

  cellNome.innerHTML = "Nome: " + nome;
  cellPedidoFeito.innerHTML = "Data Feito: " + formatarData(pedidoFeito);
  cellPedidoEntregue.innerHTML = "Data Entregue: " + formatarData(pedidoEntregue);
  cellDescricao.innerHTML = descricao;

FecharModal();
}
//___________________________________________________________________________________________________________________

function FecharModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


