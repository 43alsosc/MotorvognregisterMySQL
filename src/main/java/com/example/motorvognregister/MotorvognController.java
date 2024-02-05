package com.example.motorvognregister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MotorvognController {

    private final MotorvognRepository motorvognRepository;
    private final BilDatabase bilDatabase;

    @Autowired
    public MotorvognController(MotorvognRepository motorvognRepository) {
        this.motorvognRepository = motorvognRepository;
        this.bilDatabase = new BilDatabase();
    }

    @PostMapping("/lagre")
    public ResponseEntity<String> lagreMotorvogn(@RequestBody Motorvogn innMotorvogn) {
        try {
            motorvognRepository.save(innMotorvogn);
            return ResponseEntity.status(HttpStatus.CREATED).body("Motorvogn lagret!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Feil ved lagring av motorvogn");
        }
    }

    @GetMapping("/hentAlle")
    public ResponseEntity<List<Motorvogn>> hentAlle() {
        try {
            List<Motorvogn> motorvogner = motorvognRepository.findAll();
            return new ResponseEntity<>(motorvogner, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/slettAlle")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void slettAlle() {
        try {
            motorvognRepository.deleteAll();
        } catch (Exception e) {
            // Log the exception or handle it as needed
        }
    }

    @GetMapping("/hentBilmerker")
    public ResponseEntity<List<String>> hentBilmerker() {
        try {
            List<String> bilmerker = bilDatabase.hentBilmerker();
            return new ResponseEntity<>(bilmerker, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/hentBilTyper")
    public ResponseEntity<List<String>> hentBilTyper(@RequestParam String bilmerke) {
        try {
            List<String> bilTyper = bilDatabase.hentBilTyper(bilmerke);
            return new ResponseEntity<>(bilTyper, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
