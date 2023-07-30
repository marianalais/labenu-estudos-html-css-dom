const pegarNome = () => {
  const nomeDoInput = document.getElementById("nome");
  console.log(nomeDoInput.value);
};

const pegarEndereco = () => {
  const enderecoDoInput = document.getElementById("endereco");
  console.log(enderecoDoInput.value);
};

const pegarEmail = () => {
  const emailDoInput = document.getElementById("email");
  console.log(emailDoInput.value);
};

const limparNome = () => {
  const nomeDoInput = document.getElementById("nome");
  nomeDoInput.value = "";
};
