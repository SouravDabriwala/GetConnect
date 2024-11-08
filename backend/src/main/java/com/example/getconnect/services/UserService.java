package com.example.getconnect.services;


import com.example.getconnect.dto.UserData;
import com.example.getconnect.entities.User;
import com.example.getconnect.mappers.UserMapper;
import com.example.getconnect.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private PrivateRoomService privateRoomService;

    public List<UserData> getAllUsers() {
        return UserMapper.mapToUserData(repo.findAll());
    }


    public void saveUser(UserData userData) {
        User user = UserMapper.mapToEntity(userData);
        repo.save(user);
        List<User> users = repo.findByEmailNot(userData.getEmail());
        privateRoomService.savePrivateRoomKey(users,user);

    }


    public String checkUser(UserData userData) {
        User user = repo.findByEmailAndPassword(userData.getEmail(),userData.getPassword());
        if(user == null) {
            return "Invalid Credentials";
        } else {
            return "Login Successfully";
        }
    }

}
