package com.example.getconnect.web;

import com.example.getconnect.dto.GenericResponse;
import com.example.getconnect.dto.UserData;
import com.example.getconnect.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;


    @GetMapping("/all")
    public GenericResponse getAllUsers() {
        List<UserData> users = service.getAllUsers();
        return new GenericResponse("List of all users", users);
    }


    @PostMapping("/save")
    public GenericResponse saveUser(@RequestBody UserData userData) {
        service.saveUser(userData);
        return new GenericResponse("User has been saved successfully",null);
    }


    @PostMapping("/login")
    public GenericResponse checkUser(@RequestBody UserData userData){
        String response = service.checkUser(userData);
        return  new GenericResponse("check user",response );
    }
}
