console.log("bananinha");

const mudarInputPassword = (event) => {
  event.preventDefault();
  const meuInputDeSenha = document.getElementById("password");
  meuInputDeSenha.setAttribute("type", "password");
};

function alterarClasse(event) {
  event.preventDefault();
  const form = document.querySelector(".light");
  form.classList.remove("light");
  form.classList.add("dark");
}
