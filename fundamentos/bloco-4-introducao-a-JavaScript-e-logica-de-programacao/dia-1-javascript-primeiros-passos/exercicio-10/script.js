const custoProduto = 200
const valorVendaProduto = 350

if (custoProduto < 0 || valorVendaProduto < 0) {
  console.log('ERRO: Confira os valores de custo e venda do produto, eles devem ser maiores que zero.')
} else {
  const custoProdutoComImposto = custoProduto + (custoProduto * 0.2)
  const lucro = (valorVendaProduto * 1000) - (custoProdutoComImposto * 1000)

  console.log('O lucro pela venda de mil produtos que custaram R$' + custoProduto + ' a unidade é de R$' + lucro)
}
