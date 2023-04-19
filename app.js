
function comprobantepago() {
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var deb = document.getElementById('tarj').value;

            var doc = new jsPDF();

            doc.text(20, 20, 'Muchas gracias por tu compra. ',);
            doc.text(20, 30, 'Nombre: ' + nombre);
            doc.text(20, 40, 'Apellido: ' + apellido);
            doc.text(20, 50, 'Email: ' + email);
            doc.text(20, 60, 'Numero tarjeta: ' + deb);

            doc.save('Recibo_Pago.pdf');
        }
        
        
function mostrar(){
    document.getElementById('formu').style.display = 'block';
}

$(document).ready(function () {
    $("#btnEnviar").click(function () {
         var nombre = $("#nombre2").val();
         var correo = $("#correo").val();
         var mensaje = $("#mensaje").val();
             $.ajax({
                 url: "https://reqres.in/api/users",
                 type: "POST",
                 data: {
                    name: nombre,
                    mail: correo,
                    mens: mensaje,
                  },
                 success: function (result) {
                 console.log(result);
                        $("#respuestaConsola").html(JSON.stringify(result));
                        $("#respuestaHTML").html("<p>Hola " + result.name + ", gracias por tu respuesta, se envio un descuento a tu mail : " + result.mail +"</p>");
                    },
                    error: function (xhr, status, error) {
                        alert("Ha ocurrido un error: " + error);
                    }
                });
            });
  });
  

 


