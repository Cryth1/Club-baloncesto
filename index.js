$(function () {
    agregarUsuario();
    editarUsuario();
    guardarEdicionesUsuario();
    eliminar();

});


function agregarUsuario() {
    $('form input[type=submit]').on('click', function (e) {
        
        e.preventDefault();

        var numero = $("#numero");
        var nombre = $("#nombre");
        var estatura = $("#estatura");
        var edad = $("#edad");
        var localidad = $("#localidad");

        $('#tabla').append("<tr>" +
            "<td>" + numero.val() + "</td>"  +
            "<td>" + nombre.val() + "</td>"  +
            "<td>" + estatura.val() + "</td>"  +
            "<td>" + edad.val() + "</td>"  +
            "<td>" + localidad.val() + "</td>" +
            "<td> <button type = 'button' name 'edit' class= 'editar btn btn-primary'>Editar</button>" +
            "<td> <button type = 'button' class='eliminar btn btn-danger'>Eliminar</button>" + 
            "</tr>");

        numero.val('');
        nombre.val('');
        estatura.val('');
        edad.val('');
        localidad.val('');

    })


}

function editarUsuario() {
    $('#tabla').on('click', '.editar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdNumero = tr.children("td:nth-child(1)");
        var tdNombre = tr.children("td:nth-child(2)");
        var tdEstatura = tr.children("td:nth-child(3)");
        var tdEdad = tr.children("td:nth-child(4)");
        var tdLocalidad = tr.children("td:nth-child(5)");
        var tdOpciones = tr.children("td:nth-child(6)");

        var vnumero = tdNumero.html();
        tdNumero.html("<input type='text' id='txtNumero' value='" + vnumero +"'/>");

        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' value='" + vnombre + "'/>");

        var vestatura= tdEstatura.html();
        tdEstatura.html("<input type='text' id='txtEstatura' value='" + vestatura +"'/>");

        var vedad = tdEdad.html();
        tdEdad.html("<input type='text' id='txtEdad' value='" + vedad +"'/>");

        var vlocalidad = tdLocalidad.html();
        tdLocalidad.html("<input type='text' id='txtLocalidad' value='" + vlocalidad +"'/>");

        tdOpciones.html("<button type='button' class='guardar btn btn-primary'>Guardar</a>")
            

    });
}

function guardarEdicionesUsuario(){
    $('#tabla').on('click', '.guardar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdNumero = tr.children("td:nth-child(1)");
        var tdNombre = tr.children("td:nth-child(2)");
        var tdEstatura = tr.children("td:nth-child(3)");
        var tdEdad = tr.children("td:nth-child(4)");
        var tdLocalidad = tr.children("td:nth-child(5)");
        var tdOpciones = tr.children("td:nth-child(6)");

        nuevoNumero = tdNumero.children("input[type=text]").val();
        tdNumero.html(nuevoNumero);

        nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        nuevoEstatura = tdEstatura.children("input[type=text]").val();
        tdEstatura.html(nuevoEstatura);

        nuevoEdad = tdEdad.children("input[type=text]").val();
        tdEdad.html(nuevoEdad);

        nuevoLocalidad = tdLocalidad.children("input[type=text]").val();
        tdLocalidad.html(nuevoLocalidad);


        tdOpciones.html("<button type = 'button' name 'edit' class= 'editar btn btn-primary'>Editar</button>");
    });
}

function eliminar() {
    $('#tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}