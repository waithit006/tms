import { Server, Socket } from 'socket.io'
import NodeCache from 'node-cache'

export default (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log("Connection");

        socket.on('updateLatLng', (message: any) => {
            console.log(message);
        })

    })
}
