$(document).ready(function()
{

    

    
    
     


});
function addClase(id)
{
  $("a").removeClass("focus");  
  $("#"+id).addClass("focus");  
}

function search_items()
{
  var x=document.getElementById("search").value;
   // alert(x);
    
    var resu= 'search='+x;
    $.ajax({
      type:'post',
      url:'php/buscar_articulos.php',
      data:resu,
      success:function(resp){
        $("#contenido").html(resp);
       
      
      }
    })
  
     
      
      
      return false;
}

function to_buy()
{
  
  var x= $(this).attr("quantity");
  alert(x);
  var resu= 'quantity='+x;

   $.ajax({
      type:'post',
      url:'php/compra_articulos.php',
      data:resu,
      success:function(resp){
        $("#contenido").html(resp);
       
      
      }
    })

  return false;
}

function validar_registro_usuarios()
{
  var pass1=document.getElementById('password1').value;
  var pass2=document.getElementById('password2').value;
  var tel=document.getElementById('telefono').value;
  var nombre=document.getElementById('nombre').value;
  var apodo=document.getElementById('apodo').value;
  var hogar=document.getElementById('hogar').value;
  var user=document.getElementById('user').value;
  
  var resul='password1='+pass1+'&password2='+pass2+'&telefono='+tel+'&nombre='+nombre+'&apodo='+apodo+'&hogar='+hogar+'&user='+user;
  $.ajax({
    type:'post',
    url:'php/registro_usuarios_validacion.php',
    data:resul,
    success:function(resp){
      $("#validaciones").html(resp);
    }

  }) 
  return false;
 /*
  if(isNaN(tel))
  {
    alert("Solo se aceptan numeros para el numero telefonico");
    return false;
  }

  else if(pass1==pass2)
  {
    
    var x=confirm
    ("Esta seguro que desea registrar estos datos");
    if(x==true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  else
  {
    alert("las contraseñas deben ser iguales");
    return false;
  }
  */

}
