
function cantidadDigitos(){
    var numero = document.getElementById("numero").value;
    var salida = document.getElementById("salida");
    var c=0;
 
    while(numero>0)
    {

      numero = parseInt(numero/10);
      c++;
    }
 
  salida.innerHTML = c;
   
}
