
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



  

 


