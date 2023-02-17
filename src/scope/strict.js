'use strict'; // asi se declara las restrinciones 
pi = 3.1416;
console.log(pi);

function funcion(){ // esta funcione funciona ya que no esta estricta y 
                    // y aunque no este declarada funciona
    return pi= 3.1416;
}

console.log(funcion());

function funcion(){// esta funcion no esta permitida
    'use strict';
    return pi= 3.1416;
}

console.log(funcion());


