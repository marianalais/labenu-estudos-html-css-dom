function calculaPrecoTotal(quantidade) {
  const unidade = 1.3;
  const unidadeDuzia = 1.0;
  let custoTotal = 0;

  if (quantidade < 12) {
    custoTotal = unidade * quantidade;
  } else {
    custoTotal = unidadeDuzia * quantidade;
  }
  return custoTotal;
}
calculaPrecoTotal(15);
