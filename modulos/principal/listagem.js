import requisicoes from "../auxiliares/requisicoes.js";



let coletar = async function () {

    let lista = await requisicoes.enviarComToken("http://localhost:8080/listar", null)
    console.log(lista)
    montar(lista);
    
}


let montar = function (lista) {

    document.getElementById("consultar-pedidos").innerHTML = ""
    let div = "<div id='listaPedidos'>"

    for (let index = 0; index < lista.length; index++) {
        div += '<div class="card" id= "' + lista[index].NProcesso + '">'
        div += '<h1>Numero processo: #' + lista[index].NProcesso + ' </h1>';
        div += '<h1>Status:' + lista[index].status + '</h1>'
        div += '<h1>data abertura: ' + lista[index].data + '</h1>'
        div += '<h1>hora abertura: ' + lista[index].hora + '</h1>'
        div += "</div>"
    }

    div += "</div>"
    document.getElementById("consultar-pedidos").innerHTML = div;

}

export default { coletar }