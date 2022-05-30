"use strict";
var Setores;
(function (Setores) {
    Setores["MARKETING"] = "marketing";
    Setores["VENDAS"] = "vendas";
    Setores["FINANCEIRO"] = "financeiro";
})(Setores || (Setores = {}));
var listaColaboradores = [{
        nome: "Raul",
        salário: 8100,
        setor: Setores.MARKETING,
        presencial: true
    }, {
        nome: "Carlos",
        salário: 9130,
        setor: Setores.VENDAS,
        presencial: false
    }, {
        nome: "Salete",
        salário: 2200,
        setor: Setores.FINANCEIRO,
        presencial: true
    }, {
        nome: "Pedro",
        salário: 3654,
        setor: Setores.MARKETING,
        presencial: false
    }];
var Pessoalmente = function (listaColaboradores) {
    var presencial = listaColaboradores.filter(function (pres) {
        if (pres.setor === Setores.MARKETING && pres.presencial === true) {
            return listaColaboradores;
        }
        return presencial;
    });
};
console.log(Pessoalmente(listaColaboradores));
