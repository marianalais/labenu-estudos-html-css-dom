const frutas = ["laranja", "limão", "uva"];

const inserirFruta1 = document.getElementById("fruta-1");
inserirFruta1.innerHTML += frutas[0];

const inserirFruta2 = document.getElementById("fruta-2");
inserirFruta2.innerHTML += frutas[1];

const inserirFruta3 = document.getElementById("fruta-3");
inserirFruta3.innerHTML += frutas[2];

// for (let i = 0; i < frutas.length; i++) {
//   const frutaElement = document.getElementById(`fruta-${i + 1}`);
//   frutaElement.innerHTML = frutas[i];
// }
const inserirFruta4 = document.getElementById("fruta-4");

const inserirFrutaInput = () => {
  const frutaInput = document.getElementById("fruta");

  console.log(frutaInput.value);

  inserirFruta4.innerHTML += frutaInput.value;
};
