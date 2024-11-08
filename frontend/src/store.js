import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./modules/Users/services/UserSlice";
import PrivateRoomSlice from "./modules/PrivateRoom/services/PrivateRoomSlice";
import MessageSlice from "./modules/Messages/services/MessageSlice";
import SenderAndReceiverSlice from "./modules/SenderAndReceiver/SenderAndReceiverSlice";



const store = configureStore({
    reducer: {
        userSlice: UserSlice,
        privateRoomSlice: PrivateRoomSlice,
        messageSlice: MessageSlice,
        senderAndReceiverSlice: SenderAndReceiverSlice

    }
})


export default store;