function interacaoProdutos() {
  const produtos = document.querySelectorAll('.produtos-list-item');
  const produtosContent = document.querySelectorAll('.produtos-conteudo');
  
  if(produtos.length && produtosContent.length) {
    produtosContent[0].classList.add('ativo');
  
    function handleClickProduto(index) {
      produtosContent.forEach((conteudo) => {
        conteudo.classList.remove('ativo');
      });
      produtosContent[index].classList.add('ativo');
    };
    
    function trocarteBackground(event) {
      const el = event.currentTarget
      produtos.forEach((produto) => {
        produto.classList.remove('ativo');
      });
      el.classList.add('ativo');
    };
  
    produtos.forEach((produto, index) => {
      produto.addEventListener('click', () => {
        handleClickProduto(index);
      });
    });
    produtos.forEach((produto) => {
      produto.addEventListener('click', trocarteBackground);
    });
  };
};
interacaoProdutos();


