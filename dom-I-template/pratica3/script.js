let contador = 0;
let contadorTela = 0;
//Aparece no console
const contarCliques = () => {
  contador++;
  console.log(contador);
};
//Aparece na tela
function aparecerContadorNaTela() {
  contadorTela += 1;
  const contadorElemento = document.getElementById("contador");
  contadorElemento.innerHTML = contadorTela;
}
