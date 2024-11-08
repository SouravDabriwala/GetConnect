package com.example.getconnect.web;


import com.example.getconnect.dto.GenericResponse;
import com.example.getconnect.services.PrivateRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/private-room")
public class PrivateRoomController {


    @Autowired
    private PrivateRoomService service;


    @GetMapping("/key/{firstUserEmail}/{secondUserEmail}")
    public GenericResponse getPrivateRoomKeyOfUser(@PathVariable("firstUserEmail")String firstUserEmail,@PathVariable("secondUserEmail")String secomdUserEmail) {
        Integer privateRoomKeyOfUser = service.getPrivateRoomOfUser(firstUserEmail,secomdUserEmail);
        return new GenericResponse("Private Room of user", privateRoomKeyOfUser);
    }
}
