import trocarTela from "./auxiliares/trocarTela.js";
import login from "./login.js";
import mapalealet from "./auxiliares/mapalealet.js";
import botoesTopo from "./auxiliares/botoesTopo.js";
import cadastro from "./cadastro.js";
import solicitacao from "./principal/solicitacao.js";

window.onload = function () {
    if (localStorage.getItem("token") !== null) trocarTela.Logar();
}



