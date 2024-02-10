$(document).ready(function() {
    hentAlle(); // Henter alle billetter ved lasting av siden
});

function regKinobillett() {
    // Validering
    if (!validerOgRegKinobillett()) {
        return;
    }

    // Henter verdier fra input-feltene
    const kinobillett = {
        Fornavn: $("#fornavn").val(),
        Etternavn: $("#etternavn").val(),
        Telefonnr: $("#telefonnr").val(),
        Epost: $("#epost").val()
    };

    // Utfører en POST-request for å lagre billetten
    $.post("/lagre", kinobillett, function() {
        hentAlle(); // Oppdaterer listen etter at billetten er lagret
    });

    // Tømmer input-feltene
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function validerOgRegKinobillett() {
    // Henter verdier fra input-feltene
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();

    // Validering
    if (fornavn === "") {
        $("#fornavn-feilmelding").text("Vennligst fyll ut fornavn").css("color", "red");
        return false;
    } else {
        $("#fornavn-feilmelding").text("").css("color", "black");
    }

    if (etternavn === "") {
        $("#etternavn-feilmelding").text("Vennligst fyll ut etternavn").css("color", "red");
        return false;
    } else {
        $("#etternavn-feilmelding").text("").css("color", "black");
    }

    if (telefonnr === "") {
        $("#telefonnr-feilmelding").text("Vennligst fyll ut telefonnummer").css("color", "red");
        return false;
    } else {
        $("#telefonnr-feilmelding").text("").css("color", "black");
    }

    if (epost === "") {
        $("#epost-feilmelding").text("Vennligst fyll ut e-postadresse").css("color", "red");
        return false;
    } else {
        $("#epost-feilmelding").text("").css("color", "black");
    }

    return true;
}

function hentAlle() {
    // Utfører en GET-request for å hente alle billetter
    $.get("/hentAlle", function(kinobilletter) {
        formaterData(kinobilletter); // Formaterer og viser billettene
    });
}

function formaterData(kinobilletter) {
    let ut = "<h2>Alle billetter</h2>"; // Flytt overskriften inn i funksjonen

    ut += "<table><tr><th><strong>Fornavn</strong></th><th><strong>Etternavn</strong></th><th><strong>Telefonnr</strong></th><th><strong>Epost</strong></th></tr>";
    // Går gjennom alle billetter og legger dem til i tabellen
    for(const kinobillett of kinobilletter) {
        ut += "<tr><td>" + kinobillett.Fornavn + "</td><td>" + kinobillett.Etternavn + "</td><td>" + kinobillett.Telefonnr + "</td><td>" + kinobillett.Epost + "</td></tr>";
    }
    ut += "</table>";
    $("#kinobillettene").html(ut); // Setter inn tabellen i HTML-elementet
}

function slettAlle() {
    // Utfører en GET-request for å slette alle billetter
    $.get( "/slettAlle", function() {
        hentAlle(); // Oppdaterer listen etter at alle billetter er slettet
    });
}
