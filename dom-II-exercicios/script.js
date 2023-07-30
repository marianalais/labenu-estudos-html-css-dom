const adicionaItem = (event) => {
  const novoItem = document.createElement("article");
  const conteudoContainer = document.createTextNode("");
  novoItem.appendChild(conteudoContainer);
  const containerAtual = document.getElementById("container");
  containerAtual.insertAdjacentElement("beforeend", novoItem);

  novoItem.setAttribute("class", "item");
  //   novoItem.classList.add("item");
};

const removeItem = (event) => {
  const itemClicado = event.target;
  const conteudoContainer2 = document.getElementById("container");
  conteudoContainer2.removeChild(itemClicado);
};
