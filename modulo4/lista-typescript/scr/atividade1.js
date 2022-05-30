"use strict";
var exer1 = function (nome, data) {
    nome = "Raul";
    data = "21/02/1997";
    data.split(data, 2);
    console.log("\"Ol\u00E1 me chamo ".concat(nome, ", nasci no dia} do m\u00EAs de ").concat(data.split(data, 2), " do ano de {ANO}\""));
};
