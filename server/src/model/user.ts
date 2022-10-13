import { SocketId } from "socket.io-adapter";

export interface User {
    username: string;
    userId: SocketId;
}
