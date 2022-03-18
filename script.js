var operation = "";
    var resultado = "";
    $(document).ready(function () {
        $('.num').click(function () {

            var valeur = $(this).val();
            operation += valeur
            $('#valeur').val(operation);
        });
        $('#calcul').click(function () {
            resultado = eval($('#valeur').val());
            $("#resultat").val($('#valeur').val() + "=" + resultado)

        });
        $('#suppr').click(function () {
            $("#valeur").val(operation ="");
            $("#resultat").val(resultado ="");
        });
    });