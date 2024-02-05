package com.example.motorvognregister;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MotorvognRepository extends JpaRepository<Motorvogn, Long> {
    // Du kan legge til egendefinerte spørringer eller metoder her om nødvendig
}
