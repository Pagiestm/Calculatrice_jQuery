var operation = "";
    var resultat = "";
    $(document).ready(function () {
        $('.num').click(function () {

            var valeur = $(this).val();
            operation += valeur
            $('#valeur').val(operation);
        });
        $('#calcul').click(function () {
            resultat = eval($('#valeur').val());
            $("#resultat").val($('#valeur').val() + "=" + resultat)

        });
        $('#supprimer').click(function () {
            $("#valeur").val(operation ="");
            $("#resultat").val(resultat ="");
        });
    });