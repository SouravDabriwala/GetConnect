package com.example.getconnect.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessagePayload {

    private String message;
    private String senderEmail;
    private String receiverEmail;
    private Integer roomId;
}
