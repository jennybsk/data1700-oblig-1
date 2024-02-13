<script>
    $(document).ready(function() {
    // Henter inn billetter ved ny lasting av siden
    hentAlle();
});

    // Oppretter array for billettregister
    const kinobillettRegister=[];

    // Skriver ut array med registrerte
    function visKinobillettRegister() {
    let ut = "<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
    "</tr>";
    for (let kinobillett of kinobillettRegister){
    ut+="<tr>";
    ut+="<td>" + kinobillett.Film + "</td><td>" + kinobillett.Antall + "</td><td>" + kinobillett.Fornavn + "</td><td>" + kinobillett.Etternavn + "</td><td>" + kinobillett.Telefonnr + "</td><td>" + kinobillett.Epost + "</td>";
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

    // Registrerer den nye infoen i arrayet
    kinobillettRegister.push(kinobillett);

    // Viser den nye infoen i arrayet
    visKinobillettRegister();

    // Sletter info i inputboksene
    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function slettAlle() {
    // Utfører GET-request for å slette alle billetter
    $.get( "/slettAlle", function() {
        hentAlle(); // Oppdaterer listen etter at alle billetter er slettet
    });
}
</script>