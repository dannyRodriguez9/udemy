/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.holaMundo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
@Slf4j
public class controladorREST {
    
    @GetMapping("/")
    public String comienzo (){
        return "Mi primer hola mundo con Spring";
    }
    
}
