package com.example.getconnect.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserData {

    private int id;
    private String username;
    private String email;
    private String password;
    private String country;
    private String phoneNo;
}
