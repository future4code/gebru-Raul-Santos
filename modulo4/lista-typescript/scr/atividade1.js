"use strict";
var exer1 = function (nome, data) {
    var arraydata = data.split("/");
    return ("\"Ol\u00E1 me chamo ".concat(nome, ", nasci no dia} do m\u00EAs de ").concat(arraydata[0], " do ano de ").concat(arraydata[1], "\""));
};
exer1("Raul", "21/02/1997");
console.log(exer1);
