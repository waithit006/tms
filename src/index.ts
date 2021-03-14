import express, { Application, Request, Response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import "reflect-metadata";
import { createConnection } from "typeorm";


const app: Application = express()

const port: number = 4001 || process.env.PORT

createConnection().then(async connection => {
    const httpServer = createServer(app);

    const io = new Server(httpServer, {

    })

    httpServer.listen(port, function () {
        console.log(`App is listening on port ${port} !`);

    })

}).catch(error => console.log(error));




