<script type = "application/javascript"><</script>
<script>
    $(document).ready(function() {
    // henter inn billetter ved lasting av siden
    hentAlle();
});

    // oppretter array
    const kinobillettRegister=[];

    // skriver ut array med registrerte
    function visKinobillettRegister() {
    let ut = "<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
    "</tr>";
    for (let kinobillett of kinobillettRegister){
    ut+="<tr>";
    ut+="<td>" + kinobillett.film + "</td><td>" + kinobillett.antall + "</td><td>" + kinobillett.fornavn + "</td><td>" + kinobillett.etternavn + "</td><td>" + kinobillett.telefonnr + "</td><td>" + kinobillett.epost + "</td>";
    ut+="</tr>";
}
    document.getElementById("kinobillettRegister").innerHTML=ut;
}
    function regKinobillett() {
    const kinobillett = {
    Film: $("#film").val(),
    Antall: $("#antall").val(),
    Fornavn: $("#fornavn").val(),
    Etternavn: $("#etternavn").val(),
    Telefonnr: $("#telefonnr").val(),
    Epost: $("#epost").val()
};

    <!--registrerer den nye infoen i arrayet-->
    kinobillettRegister.push(kinobillett);

    <!--viser den nye infoen i arrayet-->
    visKinobillettRegister();

    <!--sletter info i inputboksene-->
    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

    function slettAlle() {
    // Utfører en GET-request for å slette alle billetter
    $.get( "/slettAlle", function() {
        hentAlle(); // Oppdaterer listen etter at alle billetter er slettet
    });
}
</script>