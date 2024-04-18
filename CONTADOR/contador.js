//CREAMOS 2 VARIABLES PARA QUE RECOJAN LOS ELEMENTOS DEL HTML NUMERO Y PARRAFO
let contadorHTML = document.getElementById("numero");
let entradasHTML = document.getElementById("parrafo");
//CREAMOS EL CONTADOR QUE VA A ACUMULAR EL NUMERO DE VECES QUE PULSAMOS EL BOTON
let contador = 0;
//FUNCION QUE AUMENTA EL NUMERO Y EL VALOR QUE TIENE EL CONTADOR LO PASA AL HTML
function incrementar(){
    contador += 1;
    contadorHTML.textContent = contador;  
}
//FUNCION QUE REDUCE EL NUMERO Y PASA EL VALOR DEL CONTADOR AL HTML
function reducir(){
    contador -= 1;
    contadorHTML.textContent = contador;  
}
//FUNCION QUE MUESTRA EL NUMERO TOTAL QUE TENEMOS ABAJO Y LO REGISTRA
function guardar(){
    //CREAMOS ESTA VARIABLE PARA QUE SE MUESTRE EL VALOR DEL CONTADOR SEGUIDO DE UN GUION
    let registros = contador + ' - ';
    entradasHTML.textContent += registros;
    //UNA VEZ LE DAMOS A GUARDAR LE DECIMOS QUE EL ELEMENTO VUELVA A 0 Y EL VALOR DEL CONTADOR SEA 0
    contadorHTML.textContent = 0;
    contador = 0;
    console.log(contador);
}


