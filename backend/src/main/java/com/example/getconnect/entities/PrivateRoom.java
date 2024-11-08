package com.example.getconnect.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "private_rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrivateRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_1_id")
    private User firstUser;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_2_id")
    private User secondUser;
}
