let nome = "Marcos Monteiro";
let academia = "Centro Esportivo Cultural de Planaltina";
let faixa = "Marrom";

let idZero = 0;
let principalID = "AL";

function gerarId() {
    idZero++;
    let realIdZero = idZero.toString().padStart(6, "0");
    let id = principalID + realIdZero;
    document.getElementById("id").textContent = id;
}

gerarId();
document.getElementById("nome").textContent = nome;
document.getElementById("academia").textContent = academia;
document.getElementById("faixa").textContent = faixa;
