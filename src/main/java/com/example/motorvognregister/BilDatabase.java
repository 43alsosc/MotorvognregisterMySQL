package com.example.motorvognregister;

import java.util.*;

public class BilDatabase {

    private final Map<String, List<String>> bilmerker = new HashMap<>();

    public BilDatabase() {
        initialiserBilmerker();
    }

    private void initialiserBilmerker() {
        bilmerker.put("", Arrays.asList("Velg", "ett", "alternativ"));
        bilmerker.put("Volvo", Arrays.asList("Model1", "Model2", "Model3"));
        bilmerker.put("Kia", Arrays.asList("Soul", "Sportage", "Ceed"));
        // Legg til flere merker og modeller etter behov
    }

    public List<String> hentBilmerker() {
        return new ArrayList<>(bilmerker.keySet());
    }

    public List<String> hentBilTyper(String bilmerke) {
        return bilmerker.getOrDefault(bilmerke, Collections.emptyList());
    }
}