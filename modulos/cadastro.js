import requisicoes from "./auxiliares/requisicoes.js";
import trocarTela from "./auxiliares/trocarTela.js";

let formCadastro = document.getElementById("form-Cadastro");

formCadastro.addEventListener("submit", async function (event) {
    event.preventDefault();
    let nome2 = document.getElementById("nome").value;
    let cpf_cnpj2 = document.getElementById("cpf/cnpj").value;
    let senha2 = document.getElementById("csenha").value;
    let cep2 = document.getElementById("cep").value;
    let logradouro2 = document.getElementById("logradouro").value;
    let numero2 = document.getElementById("numero").value;
    let complemento2 = document.getElementById("complemento").value;
    let bairro2 = document.getElementById("bairro").value;
    let cidade2 = document.getElementById("cidade").value;
    let estado2 = document.getElementById("estado").value;
    let email2 = document.getElementById("cadastro-email").value;
    let telefone2 = document.getElementById("telefone").value;
    let celular2 = document.getElementById("celular").value;

    let dados = {

        nome: nome2,
        cpfCnpj: cpf_cnpj2,
        senha: senha2,
        cep: cep2,
        logradouro: logradouro2,
        numeroCasa: numero2,
        complemento: complemento2,
        bairro: bairro2,
        cidade: cidade2,
        estado: estado2,
        email: email2,
        telefone: telefone2,
        celular: celular2


    };

    let resultado = await requisicoes.enviarDados('http://localhost:8080/cadastro', dados, false)

    if (resultado == null) {
        let telaCad = document.getElementById("cadastro");
        let TelaLog = document.getElementById("login");
        formCadastro.reset();
        trocarTela.trocaTela(telaCad, TelaLog);

    }
}
)
export default { formCadastro };