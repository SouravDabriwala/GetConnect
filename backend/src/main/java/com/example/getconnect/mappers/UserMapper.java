package com.example.getconnect.mappers;


import com.example.getconnect.dto.UserData;
import com.example.getconnect.entities.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserMapper {


    public static List<UserData> mapToUserData(List<User> users) {
        return users.stream().map(user -> new UserData(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getCountry(),
                user.getPhoneNo()
        )).toList();
    }


    public static User mapToEntity(UserData users) {
    return new User(
        users.getId(),
        users.getUsername(),
        users.getEmail(),
        users.getPassword(),
        users.getCountry(),
        users.getPhoneNo());
    }
}
