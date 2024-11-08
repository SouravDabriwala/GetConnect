package com.example.getconnect.repo;

import com.example.getconnect.entities.PrivateRoom;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrivateRoomKeyRepo extends JpaRepository<PrivateRoom, Integer> {

    @Query(value = "SELECT pr.id from private_rooms pr where (pr.user_1_id = (select u.id from users u where u.email=:firstUserEmail ) or pr.user_1_id =(select u.id from users u where u.email=:secondUserEmail )) and (pr.user_2_id = (select u.id from users u where u.email=:firstUserEmail ) or pr.user_2_id = (select u.id from users u where u.email=:secondUserEmail )) ", nativeQuery = true)
    Tuple getPrivateRoomKeyOfUser(@Param("firstUserEmail") String firstUserEmail,@Param("secondUserEmail") String secondUserEmail);


}
