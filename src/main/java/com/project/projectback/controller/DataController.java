package com.project.projectback.controller;

import com.project.projectback.model.Data;
import com.project.projectback.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bghdo")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class DataController {
    @Autowired
    private DataRepository dataRepository;

    @PostMapping
    public ResponseEntity<String> saveInput(@RequestBody Data data) {
        dataRepository.save(data);
        return ResponseEntity.ok("Data Saved");
    }
}
