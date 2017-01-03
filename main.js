
function cantidadDigitos()
{
    var numero = document.getElementById("numero").value;
    var salida = document.getElementById("salida");
    var c=0;
 
 if (!/^([0-9])*$/.test(numero)){
    salida.innerHTML = "--";
  	document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">¡No es un Numero!</div>';
	var numero = document.getElementById("numero").value=" ";
  }
 else{
    while(numero>0)
    {
      numero = parseInt(numero/10);
      c++;
    }
 
  salida.innerHTML = c;
  document.getElementById("mensajes").innerHTML = '<div >Digitos</div>';
			
	}
}
