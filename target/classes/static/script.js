$(document).ready(function () {
    // Fyll inn bilmerke-dropdown ved lasting av siden
    hentBilmerker();
});

// Function to save a vehicle record
function lagreMotorvogn() {
    const kjennetegnInput = $('#kjennetegn');
    const kjennetegn = kjennetegnInput.val().toUpperCase(); // Convert to uppercase for consistency

    // Validate license plate format (two letters followed by five digits)
    if (kjennetegn.length !== 7 || !/^[A-Z]{2}\d{5}$/.test(kjennetegn)) {
        visFeilmeldingOgOppdaterFormat(kjennetegnInput, 'Ugyldig format for kjennetegn. Vennligst skriv inn to bokstaver og fem tall (f.eks., AB12345).', 'Ugyldig format. Skriv inn to bokstaver og fem tall (f.eks., AB12345).');
        return;
    }

    skjulFeilmeldingOgOppdaterFormat(kjennetegnInput, 'Format: AB12345');

    const motorvogn = {
        navn: $('#navn').val(),
        adresse: $('#adresse').val(),
        personnummer: $('#personnummer').val(),
        kjennetegn: kjennetegn, // Use the validated license plate
        bilmerke: $('#bilmerke').val(),
        biltype: $('#biltype').val()
    };

    $.ajax({
        type: 'POST',
        url: '/api/lagre',
        contentType: 'application/json', // Set the content type to JSON
        data: JSON.stringify(motorvogn), // Convert the data to JSON string
        success: function () {
            hentAlleMotorvogner();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error('Error during Ajax POST request:', xhr);
            alert('Error during Ajax POST request: ' + JSON.stringify(xhr));
        }
    });

    $("input").val("");
    $("#biltype").empty(); // Clear car type dropdown after saving
}

// Function to display an error message below the input field and update the format text
function visFeilmeldingOgOppdaterFormat(inputElement, melding, formatTekst) {
    const feilmeldingElementId = inputElement.attr('id') + '-feilmelding';
    if ($('#' + feilmeldingElementId).length === 0) {
        const feilmeldingElement = $('<div class="text-red-500 text-sm mt-1" id="' + feilmeldingElementId + '">' + melding + '</div>');
        inputElement.parent().append(feilmeldingElement);
    } else {
        $('#' + feilmeldingElementId).text(melding);
    }

    const kjennetegnFormatTekst = $('#kjennetegn-format');
    kjennetegnFormatTekst.text(formatTekst);
}

// Function to hide the error message below the input field and update the format text
function skjulFeilmeldingOgOppdaterFormat(inputElement) {
    const feilmeldingElementId = inputElement.attr('id') + '-feilmelding';
    $('#' + feilmeldingElementId).remove();

    const kjennetegnFormatTekst = $('#kjennetegn-format');
    kjennetegnFormatTekst.text('Format: AB12345');
}

// Function to retrieve all vehicle records
function hentAlleMotorvogner() {
    $.get("/api/hentAlle", function (data) {
        formaterData(data);
    });
}

// Function to format and display vehicle records in a table
function formaterData(motorvogner) {
    let ut = "<table class='w-full border-collapse border border-gray-400'>" +
        "<thead>" +
        "<tr>" +
        "<th class='p-2 border border-gray-400'>Navn</th>" +
        "<th class='p-2 border border-gray-400'>Personnummer</th>" +
        "<th class='p-2 border border-gray-400'>Adresse</th>" +
        "<th class='p-2 border border-gray-400'>Kjennetegn</th>" +
        "<th class='p-2 border border-gray-400'>Bilmerke</th>" +
        "<th class='p-2 border border-gray-400'>Bil Type</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";

    for (const motorvogn of motorvogner) {
        ut += `<tr class='border border-gray-400'><td class='p-2 border border-gray-400'>${motorvogn.navn}</td><td class='p-2 border border-gray-400'>${motorvogn.personnummer}</td><td class='p-2 border border-gray-400'>${motorvogn.adresse}</td><td class='p-2 border border-gray-400'>${motorvogn.kjennetegn}</td><td class='p-2 border border-gray-400'>${motorvogn.bilmerke}</td><td class='p-2 border border-gray-400'>${motorvogn.biltype}</td></tr>`;
    }

    ut += "</tbody></table>";
    $("#motorvognene").html(ut);
}

// Function to delete all vehicle records
function slettAlleMotorvogner() {
    const confirmDelete = confirm("Er du sikker på at du vil slette alle registrerte motorvogner?");
    if (confirmDelete) {
        $.get("/slettAlle", function () {
            hentAlleMotorvogner();
        });
    }
}

// Function to retrieve car types based on car brand
function hentBilTyper() {
    const valgtBilmerke = $('#bilmerke').val();

    $.get(`/api/hentBilTyper?bilmerke=${valgtBilmerke}`, function (data) {
        oppdaterBilTyperDropdown(data);
    });
}

// Function to populate the car type dropdown with options
function oppdaterBilTyperDropdown(bilTyper) {
    const biltypeDropdown = $('#biltype');
    biltypeDropdown.empty();

    for (const biltype of bilTyper) {
        biltypeDropdown.append(`<option value="${biltype}">${biltype}</option>`);
    }
}

// Function to populate the car brand dropdown with options
function oppdaterBilmerkeDropdown(bilmerker) {
    const bilmerkeDropdown = $('#bilmerke');
    bilmerkeDropdown.empty();
    for (const bilmerke of bilmerker) {
        bilmerkeDropdown.append(`<option value="${bilmerke}">${bilmerke}</option>`);
    }
}

// Function to retrieve car brands from the server
function hentBilmerker() {
    $.get("/api/hentBilmerker", function (data) {
        oppdaterBilmerkeDropdown(data);
    });
}

// Event listener to limit the length of the personal number input
$('#personnummer').on('input', function () {
    const maxLen = 11; // Maximum number of digits allowed
    const val = $(this).val();
    if (val.length > maxLen) {
        $(this).val(val.slice(0, maxLen)); // Trim the value if it exceeds the limit
    }
});

// Event listener to validate license plate format (two letters followed by five digits)
$('#kjennetegn').on('input', function () {
    const val = $(this).val().toUpperCase(); // Convert to uppercase for consistency
    const kjennetegnFormatTekst = $('#kjennetegn-format');
    const feilmeldingElement = $('#kjennetegn-feilmelding');

    // Check if the input matches the format after two letters and five digits are entered
    if (val.length === 7 && /^[A-Z]{2}\d{5}$/.test(val)) {
        // Valid format
        kjennetegnFormatTekst.text('Format: AB12345');
        skjulFeilmeldingOgOppdaterFormat(feilmeldingElement);
    } else {
        // Invalid format
        kjennetegnFormatTekst.text('Ugyldig format. Skriv inn to bokstaver og fem tall (f.eks., AB12345).');
        visFeilmeldingOgOppdaterFormat(feilmeldingElement, 'Ugyldig format. Skriv inn to bokstaver og fem tall (f.eks., AB12345).', 'Ugyldig format. Skriv inn to bokstaver og fem tall (f.eks., AB12345).');
    }
});