package com.example.getconnect.web;


import com.example.getconnect.dto.MessagePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class MessageController {


    @Autowired
    private SimpMessagingTemplate messagingTemplate;


    @MessageMapping("/send-message")
    public void sendNotificationToUser(@Payload MessagePayload messagePayload) {
        messagingTemplate.convertAndSendToUser(messagePayload.getRoomId().toString(),"/send/private", messagePayload);
    }
}
