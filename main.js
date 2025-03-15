// // Simulação de adição de produtos a cesta do site
const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido = document.getElementById('lista-pedido');
const totalElemento = document.getElementById('total');
let total = 0;

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        // Obtém do elemento pai do botão
        const produto = botao.parentElement;

        // Obtem o nome do produto a partir do texto dentro da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtém o preço do produto, removendo o texto "R$" e convertendo para decimal
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$',''));

        // Cria novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');
        // formata o preco com duas casas
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)} `;

        // Adiciona item criado à lista de pedidos
        listaPedido.appendChild(itemPedido);    

        // Atualiza o total da compra somando o preço dos novos itens
        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
        
    });

});

// Simulaçao de finalização do pedido
// Seleciona o botão "Finalizar Pedido"
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

// Adiciona evento de clique no botão finalizar pedido
botaoFinalizarPedido .addEventListener('click', () =>{
    alert("Pedido realizado com sucesso (Simulação)")
    
});
