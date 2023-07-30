const verificarTecla = (event) => {
  if (event.shiftKey) {
    document.getElementById("mensagem").innerHTML =
      "ATENÇÃO: SEGURANDO O SHIFT.";
  } else {
    document.getElementById("mensagem").innerHTML = "";
  }
};
