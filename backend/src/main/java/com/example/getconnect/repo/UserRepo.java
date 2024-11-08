package com.example.getconnect.repo;

import com.example.getconnect.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    List<User> findByEmailNot(String email);

    User findByEmailAndPassword(String email, String password);
}
