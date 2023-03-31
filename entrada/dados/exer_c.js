// dados
let precoProduto = prompt("Preço do produto: ");

// cálculo

let precoVista = (precoProduto - (precoProduto * 0.10));
let precoParcelado = (precoProduto / 3);

// conclusão

alert("Preço do produto R$: " + precoProduto + "\nPreço a vista R$: " + precoVista.toFixed(2) + "\nPreço dividido em 3x sem juros R$: " + precoParcelado.toFixed(2));