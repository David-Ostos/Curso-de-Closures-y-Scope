 // variables 
 var a; // declaramos 
 var b = "b"; // asignando 

 
function Mostrar(){
    c = "c" // si no se declara la variable queda global 
    var d = "d"; // asi queda declarado solo en la funcion
    console.log(c);
    
}

Mostrar();


 console.log(c);