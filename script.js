var operation = "";
    var resultado = "";
    $(document).ready(function () {
        $('.num').click(function () {

            var valeur = $(this).val();
            operation += valeur
            $('#valores').val(operation);
        });
        $('#calcular').click(function () {
            resultado = eval($('#valores').val());
            $("#resultat").val($('#valores').val() + "=" + resultado)

        });
        $('#suppr').click(function () {
            $("#valores").val(operation ="");
            $("#resultat").val(resultado ="");
        });
    });