function addElemento() {
  const novoItem0 = document.createElement("li");
  const novoConteudo0 = document.createTextNode("Item 0");
  novoItem0.appendChild(novoConteudo0);
  const listaAtual = document.getElementById("lista");
  listaAtual.insertAdjacentElement("afterbegin", novoItem0);

  const novoItem5 = document.createElement("li");
  const novoConteudo5 = document.createTextNode("Item 5");
  novoItem5.appendChild(novoConteudo5);
  listaAtual.insertAdjacentElement("beforeend", novoItem5);
}
addElemento();
