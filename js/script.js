// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os botões de categoria
    const botoesFiltro = document.querySelectorAll('.btn-categoria');
    // Seleciona todos os cards de produtos
    const produtos = document.querySelectorAll('.produto-card');

    // Adiciona um "ouvinte" de clique para cada botão de filtro
    botoesFiltro.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // --- 1. Atualiza o botão ativo ---
            
            // Remove a classe 'ativo' do botão que estava ativo antes
            document.querySelector('.btn-categoria.ativo').classList.remove('ativo');
            // Adiciona a classe 'ativo' ao botão que acabamos de clicar
            botao.classList.add('ativo');

            // --- 2. Filtra os produtos ---

            // Pega o valor do filtro do atributo 'data-filtro' do botão clicado
            const filtro = botao.getAttribute('data-filtro');

            // Passa por cada produto para decidir se deve mostrá-lo ou escondê-lo
            produtos.forEach(function(produto) {
                // Pega a categoria do produto do atributo 'data-categoria'
                const categoriaProduto = produto.getAttribute('data-categoria');

                // Verifica a condição para mostrar o produto
                if (filtro === 'todos' || filtro === categoriaProduto) {
                    // Mostra o produto
                    produto.style.display = 'flex'; // Usamos 'flex' porque o card usa flexbox
                } else {
                    // Esconde o produto
                    produto.style.display = 'none';
                }
            });
        });
    });
});