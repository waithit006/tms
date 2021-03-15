import express, { Application, Request, Response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import APISocket from './socket'

const app: Application = express()

const port: number = 4001 || process.env.PORT

createConnection().then(async (connection:Connection) => {
    const httpServer = createServer(app);

    const io = new Server(httpServer, {})

    APISocket(io)

    httpServer.listen(port, function () {
        console.log(`App is listening on port ${port} !`);

    })

}).catch(error => console.log(error));




