package com.example.getconnect.services;

import com.example.getconnect.entities.PrivateRoom;
import com.example.getconnect.entities.User;
import com.example.getconnect.repo.PrivateRoomKeyRepo;
import jakarta.persistence.Tuple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrivateRoomService {

  @Autowired private PrivateRoomKeyRepo repo;

  public Integer getPrivateRoomOfUser(String firstUserEmail, String secondUserEmail) {
    Tuple t = repo.getPrivateRoomKeyOfUser(firstUserEmail, secondUserEmail);
    return t.get(0, Integer.class);
  }

  public void savePrivateRoomKey(List<User> users, User user) {
    for (int i = 0; i < users.size(); i++) {
      PrivateRoom privateRoom = new PrivateRoom();
      privateRoom.setFirstUser(user);
      privateRoom.setSecondUser(users.get(i));
      repo.save(privateRoom);
    }
  }
}
