import trocarTela from "./trocarTela.js";
import listagem from "../principal/listagem.js";
// botões no topo da tela 

let bsolicitar = document.getElementById("so");
//let balterar = document.getElementById("ad");
let bconsultar = document.getElementById("co");
let bsair = document.getElementById("sair");

// telas
let Telasolicitar = document.getElementById("solicitar");
//let Telaalterar = document.getElementById("alterar");
let Telaconsultar = document.getElementById("consultar");


// mostrar tela de solicitação de outorga

bsolicitar.addEventListener("click", function () {
  
    //trocarTela.trocar3telas(Telasolicitar, Telaalterar, Telaconsultar)
    trocarTela.trocar3telas(Telasolicitar, Telaconsultar, Telaconsultar)


});

// mostrar tela de alteração de outorga

//balterar.addEventListener("click", function () {
   
//    trocarTela.trocar3telas(Telaalterar, Telasolicitar, Telaconsultar)
//})

// mostrar tela de consulta de outorga

bconsultar.addEventListener("click", function () {
    
    listagem.coletar()
    //trocarTela.trocar3telas(Telaconsultar, Telasolicitar, Telaalterar)
    trocarTela.trocar3telas(Telaconsultar, Telasolicitar, Telasolicitar)

})

// deslogar
bsair.addEventListener("click", function () {

    let barraInterna = document.getElementById("barraInterna");
    let Telalogin = document.getElementById("login");

    localStorage.removeItem("token");

    trocarTela.trocar3telas(Telalogin, barraInterna, document.getElementById("principal"));
    trocarTela.trocaTela(Telaconsultar, Telalogin)

    
})

export default { bconsultar, bsolicitar, bsair };
//export default { balterar, bconsultar, bsolicitar, bsair };