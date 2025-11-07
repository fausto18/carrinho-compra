// Inicializa o total geral
let totalGeral = 0; 
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('KZ')[1].replace('.', '').replace(',', '.').trim());
    let quantidade = parseInt(document.getElementById('quantidade').value, 10);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.insertAdjacentHTML('beforeend', `
        <article class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">KZ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </article>
    `);

    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `KZ ${totalGeral.toLocaleString('en-pt', { minimumFractionDigits: 2 })}`;
    // Reseta para o valor mínimo
    document.getElementById('quantidade').value = 1; 
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'KZ 0,00';
    // Reseta para o valor mínimo
}
    document.getElementById('quantidade').value = 1; 