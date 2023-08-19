//___________________________________________________________________________________________________________________
// function openModal() {
//     const modal = document.getElementById("myModal");
//     modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }
//___________________________________________________________________________________________________________________


function Teste(nome, pedidoFeito, pedidoEntregue, descricao ) {
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