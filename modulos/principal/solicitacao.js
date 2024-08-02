import requisicoes from "../auxiliares/requisicoes.js";
let formularioOutorga = document.getElementById("form-solicitacao");

formularioOutorga.addEventListener("submit", function (event) {
    event.preventDefault();

    let modalidade = document.getElementById("modalidade").value;
    let nomeImovel = document.getElementById("solici-nome").value;
    let cep = document.getElementById("solici-cep").value;
    let logradouro = document.getElementById("solici-logradouro").value;
    let cidade = document.getElementById("solici-cidade").value;
    let latitude = document.getElementById("solici-latitude").value;
    let longitude = document.getElementById("solici-longitude").value;
    let finalidade = document.getElementById("finalidade").value;

    let dados = {
        modalidade: modalidade,
        nomeImovel: nomeImovel,
        cep: cep,
        logradouro: logradouro,
        cidade: cidade,
        latitude: latitude,
        longitude: longitude,
        finalidade: finalidade
    }

    console.log(dados)

    requisicoes.enviarComToken("http://localhost:8080/cadastroForm", dados)
    formularioOutorga.reset();
})

export default { formularioOutorga };

