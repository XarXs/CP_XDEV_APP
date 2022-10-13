import { UserList } from "../../model/user";
import { Socket } from "socket.io/dist/socket";
import { Server } from "https";

const socketIo = require('socket.io');
const getApiAndEmit = (socket: Socket) => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
};

module.exports = {
    getIo: (server: Server) => {
        const io = socketIo(server);

        let interval: NodeJS.Timer | undefined;

        const users: UserList = {};

        const onConnect = (socket: Socket) => {
            console.log("A user connected");
            users[socket.id] = {
                username: "username",
                userId: socket.id
            }

            socket.emit('socket:currentUsers', users);
            socket.broadcast.emit('socket:newUser', users[socket.id]);

            if (interval) {
                clearInterval(interval);
            }
            interval = setInterval(() => getApiAndEmit(socket), 1000)
        }

        io.on('connection', onConnect);
        return io;
    }
};
