package com.example.motorvognregister;

import jakarta.persistence.*;


@Entity
@Table(name = "motorvogn")
public class Motorvogn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String navn;
    private String adresse;
    private long personnummer;
    private String kjennetegn;
    private String bilmerke;
    private String biltype;

    public Motorvogn() {
    }

    public Motorvogn(String navn, String adresse, long personnummer, String kjennetegn, String bilmerke, String biltype) {
        this.navn = navn;
        this.adresse = adresse;
        this.personnummer = personnummer;
        this.kjennetegn = kjennetegn;
        this.bilmerke = bilmerke;
        this.biltype = biltype;
    }


    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public long getPersonnummer() {
        return personnummer;
    }

    public void setPersonnummer(long personnummer) {
        this.personnummer = personnummer;
    }

    public String getKjennetegn() {
        return kjennetegn;
    }

    public void setKjennetegn(String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }

    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBiltype() {
        return biltype;
    }

    public void setBiltype(String biltype) {
        this.biltype = biltype;
    }
}