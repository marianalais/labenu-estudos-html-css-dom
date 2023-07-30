const completarParagrafo = document.getElementById("paragrafo");
// completarParagrafo.innerHTML += " Mariana";

const valorInput = () => {
  const textoInput = document.getElementById("texto");
  console.log(textoInput.value);

  const nomeInput = document.getElementById("nome");
  completarParagrafo.innerHTML += ` ${nomeInput.value}, salve! `;
};
