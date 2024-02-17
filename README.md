https://alsos.notion.site/MySQL-og-Tomcat-fa843feef3a24cd48afb8ee6c298b580?pvs=4 

# MySql MariaDB Motorvognregister Prosjekt

Dette prosjektet er et motorvognregister implementert ved hjelp av Spring Boot (Java) på serversiden og HTML med JavaScript på klientsiden. Målet med prosjektet er å opprette, lagre, hente og slette motorvognsdata gjennom en nettleserbasert brukergrensesnitt.

## Serversiden (Java):

### Motorvogn-klasse:

- Representerer en motorvogn med attributter som navn, adresse, personnummer, kjennetegn, bilmerke og biltype.
- Har gettere og settere for alle attributtene.

### MotorvognController-klasse:

- En Spring Boot-kontroller som håndterer HTTP-forespørsler.
- Har metoder for å lagre en ny motorvogn, hente alle lagrede motorvogner og slette alle lagrede motorvogner.

### MotorvognRegisterApplication-klasse:

- Hovedklassen som starter Spring Boot-applikasjonen.

### BilDatabase-klasse:

- Inneholder hashmap array for å vise til hvilke biltyper som er under bilmerke
- Det er her index.html henter bilmerke og biltype informasjonen

## Klientsiden (HTML og JavaScript):

### HTML-fil:

- Bruker HTML for å opprette et enkelt brukergrensesnitt med input-felter for eier- og kjøretøyinformasjon.
- Inkluderer Tailwind CSS for styling.

### JavaScript-funksjoner:

#### `lagreMotorvogn()`:
Denne funksjonen samler data fra input-felter, konverterer kjennetegnet til store bokstaver for ensartethet, validerer kjennetegnets format, og sender deretter en POST-forespørsel til serveren for å lagre motorvognen. Etter vellykket lagring oppdateres visningen av alle motorvogner ved å kalle `hentAlleMotorvogner()`.

#### `hentAlleMotorvogner()`:
Denne funksjonen sender en GET-forespørsel til serveren for å hente alle motorvogner. Når dataene er mottatt, blir de formatert ved hjelp av `formaterData()` og deretter vist i en HTML-tabell.

#### `formaterData(motorvogner)`:
Denne funksjonen tar inn motorvognsdata som parameter, formaterer dem og viser resultatet i en HTML-tabell.

#### `slettAlleMotorvogner()`:
Denne funksjonen sender en GET-forespørsel til serveren for å slette alle motorvogner. Etter vellykket sletting blir visningen av alle motorvogner oppdatert ved å kalle `hentAlleMotorvogner()`.

#### `visFeilmeldingOgOppdaterFormat(inputElement, melding, formatTekst)`:
Denne funksjonen viser en feilmelding under et inndatafelt og oppdaterer formatteksten basert på gitt input.

#### `skjulFeilmeldingOgOppdaterFormat(inputElement)`:
Denne funksjonen skjuler en feilmelding under et inndatafelt og oppdaterer formatteksten.

#### `hentBilTyper()`:
Denne funksjonen henter biltyper basert på valgt bilmerke ved å sende en GET-forespørsel til serveren.

#### `oppdaterBilTyperDropdown(bilTyper)`:
Denne funksjonen oppdaterer nedtrekkslisten for biltyper med de mottatte biltyper.

#### `oppdaterBilmerkeDropdown(bilmerker)`:
Denne funksjonen oppdaterer nedtrekkslisten for bilmerker med de mottatte bilmerker.

#### `hentBilmerker()`:
Denne funksjonen henter bilmerker fra serveren ved å sende en GET-forespørsel.

#### Event listener: `$('#personnummer').on('input', ...)`
Denne event-lytteren begrenser lengden på inndatafeltet for personnummer og trimmer verdien hvis den overstiger grensen.

#### Event listener: `$('#kjennetegn').on('input', ...)`
Denne event-lytteren validerer formatet på kjennetegnet mens brukeren skriver inn, og gir tilbakemelding til brukeren.


## Brukertesting Skjema

### 1. Introduksjon:

**Prosjektnavn:** Motorvognregister  
**Dato for testing:** [Dato]

### 2. Generell informasjon:

**Testdeltakerens navn:** [Testdeltakerens navn]  
**Alder:** [Alder]  
**Yrkesbakgrunn:** [Yrkesbakgrunn]  
**Tidligere erfaring med lignende systemer:** [Erfaring]

### 3. Oppgaver:

#### 1. Registrere en ny motorvogn:

**Instruksjon:** Prøv å registrere en ny motorvogn ved å fylle ut alle feltene i skjemaet.

**Observasjoner:** 
- Hvordan navigerte testdeltakeren gjennom skjemaet?
- Var det noen spesifikke felt som virket forvirrende eller vanskelige å fylle ut?
- Ble alle nødvendige felt forstått?

#### 2. Se på oversikten over registrerte motorvogner:

**Instruksjon:**

 Se på oversikten over registrerte motorvogner.

**Observasjoner:**
- Hvordan reagerte testdeltakeren på tabellen?
- Var informasjonen lett å forstå?
- Fikk testdeltakeren en god oversikt over registrerte motorvogner?

### 4. Tilbakemeldinger:

- Hva likte testdeltakeren best med systemet?
- Hva var mest utfordrende eller forvirrende?
- Eventuelle forslag til forbedringer:

### 5. Generelle spørsmål:

- Hvordan vil du beskrive din generelle opplevelse med systemet?
- På en skala fra 1 til 10, hvor enkelt var det å bruke systemet?
- Vil du ha noen endringer eller tillegg til funksjonaliteten?

### 6. Avslutning:

- Er det noe annet du ønsker å legge til eller kommentere?

### 7. Takk for deltakelsen!


# Testdeltaker 1:

**Prosjektnavn:** Motorvognregister  
**Dato for testing:** 2024-01-27

**Testdeltakerens navn:** Fredrik Alsos 
**Alder:** 17  
**Yrkesbakgrunn:** Sy Elev  
**Tidligere erfaring med lignende systemer:** Har ingen tidligere erfaring med lignende systemer.

#### Oppgave 1: Registrere en ny motorvogn:

**Observasjoner:** 
- Fredrik navigerte gjennom skjemaet i moderat hastighet og fylte ut alle feltene uten problemer.
- Ingen felt virket forvirrende eller vanskelige for Fredrik.
- Han forsto alle nødvendige felt og fylte dem ut korrekt.

#### Oppgave 2: Se på oversikten over registrerte motorvogner:

**Observasjoner:**
- Fredrik reagerte positivt på tabellen og syntes informasjonen var lett å forstå.
- Han fikk en god oversikt over registrerte motorvogner uten problemer.

#### Tilbakemeldinger:

- Hva likte Fredrik best med systemet? Fredrik likte den enkle navigasjonen og den tydelige oversikten over registrerte motorvogner.
- Hva var mest utfordrende eller forvirrende? Fredrik fant ingen utfordringer eller forvirrende elementer.
- Eventuelle forslag til forbedringer: Ingen forslag til forbedringer fra Fredrik.

#### Generelle spørsmål:

- Hvordan vil du beskrive din generelle opplevelse med systemet? Fredrik beskriver opplevelsen som svært positiv og intuitiv.
- På en skala fra 1 til 10, hvor enkelt var det å bruke systemet? Fredrik gir en score på 9.
- Vil du ha noen endringer eller tillegg til funksjonaliteten? Fredrik ønsker ingen endringer eller tillegg.

#### Avslutning:

- Er det noe annet du ønsker å legge til eller kommentere? Fredrik har ingen ytterligere kommentarer.

#### Takk for deltakelsen!

# Testdeltaker 2:

**Prosjektnavn:** Motorvognregister  
**Dato for testing:** 2024-01-28

**Testdeltakerens navn:** Carl Oscar Alsos  
**Alder:** 46
**Yrkesbakgrunn:** Barnehagelærer  
**Tidligere erfaring med lignende systemer:** Har begrenset erfaring med lignende systemer.

#### Oppgave 1: Registrere en ny motorvogn:

**Observasjoner:** 
- Carl Oscar navigerte gjennom skjemaet med høy hastighet og fylte ut alle feltene.
- Han fant bilmerke-dropdownen lite forvirrende, klarte å velge riktig alternativ for han.
- Carl Oscar forsto alle nødvendige felt.

#### Oppgave 2: Se på oversikten over registrerte motorvogner:

**Observasjoner:**
- Carl Oscar reagerte positivt på tabellen.
- Informasjonen var forståelig, men Carl Oscar ønsket filtrering av motorvogner.

#### Tilbakemeldinger:

- Hva likte Carl Oscar best med systemet? Carl Oscar likte den klare strukturen, men ønsket filtreringsalternativer.
- Hva var mest utfordrende eller forvirrende? Ingenting var forvirrende for Carl Oscar.
- Eventuelle forslag til forbedringer: Carl Oscar foreslår bedre formatering i tabellen og filtreringsalternativer.

#### Generelle spørsmål:

- Hvordan vil du beskrive din generelle opplevelse med systemet? Carl Oscar beskriver opplevelsen som positiv, men med noen forbedringspunkter.
- På en skala fra 1 til 10, hvor enkelt var det å bruke systemet? Carl Oscar gir en score på 8.
- Vil du ha noen endringer eller tillegg til funksjonaliteten? Carl Oscar ønsker bedre filtreringsalternativer og mer tydelig formatering.

#### Avslutning:

- Er det noe annet du ønsker å legge til eller kommentere? Nei, Carl Oscar har ikke noe mer å kommentere.

#### Takk for deltakelsen!

# Testdeltaker 3:

**Prosjektnavn:** Motorvognregister  
**Dato for testing:** 2024-01-25

**Testdeltakerens navn:** Fredik Inpitak  
**Alder:** 17  
**Yrkesbakgrunn:** Elev  
**Tidligere erfaring med lignende systemer:** Ingen tidligere erfaring med lignende systemer.

#### Oppgave 1: Registrere en ny motorvogn:

**Observasjoner:** 
- Fredrik navigerte gjennom skjemaet sakte og trengte ekstra tid for å fylle ut alle feltene.
- Han fant bilmerke-dropdownen og biltype-dropdownen forvirrende og spurte om hjelp.
- Fredrik forsto etter hvert alle nødvendige felt med assistanse fra instruksjonene.

#### Oppgave 2: Se på oversikten over registrerte motorvogner:

**Observasjoner:**
- Fredrik fant tabellen lite overveldene.

#### Tilbakemeldinger:

- Hva likte Fredrik best med systemet? Fredrik likte oversikten, men ønsket mer veiledning.
- Hva var mest utfordrende eller forvirrende? Bilmerke- og biltype-dropdownene var utfordrende for Fredrik.
- Eventuelle forslag til forbedringer: Fredrik foreslår mer tekst for å vise format o.l.

#### Generelle spørsmål:

- Hvordan vil du beskrive din generelle opplevelse med systemet? Fredrik beskriver opplevelsen som lite utfordrende.
- På en skala fra 1 til 10, hvor enkelt var det å bruke systemet? Fredrik gir en score på 8.
- Vil du ha noen endringer eller tillegg til funksjonaliteten?

 Fredrik ønsker mer veiledning.

#### Avslutning:

- Nei

#### Takk for deltakelsen!


# Brukertesting endringer
- Jeg la til Format under enkelte felt for å vise hva som skulle skrives.
- <img width="323" alt="Skjermbilde 2024-02-17 kl  02 31 20" src="https://github.com/43alsosc/MotorvognregisterMySQL/assets/114300964/78019a76-1240-42f9-b119-25c47280a2cd">
- Jeg la til maks tall i personnummer og kjennetegn.
- Gjorde "Eiers adresse om til et text area for å ha mer plass på å skrive adresse.
- <img width="323" alt="Skjermbilde 2024-02-17 kl  02 32 43" src="https://github.com/43alsosc/MotorvognregisterMySQL/assets/114300964/8c45901f-8d34-482b-b2fb-be7459f8d3cc">
- La til errorer når enkelte ting ble gjort feil.
- <img width="328" alt="Skjermbilde 2024-02-17 kl  02 33 25" src="https://github.com/43alsosc/MotorvognregisterMySQL/assets/114300964/2a624c2f-efbd-4db5-bea6-3f394a163ce8">
- Endret fra "Eiers Navn" til "Eiers Fulle Navn" fordi Carl Oscar var usikker på om han skulle skrive hele navnet.
- <img width="330" alt="Skjermbilde 2024-02-17 kl  02 33 39" src="https://github.com/43alsosc/MotorvognregisterMySQL/assets/114300964/1139e8dc-0dad-44fe-9f8e-59740952bab3">
