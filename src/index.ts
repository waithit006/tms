import express, { Application, Request, Response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import "reflect-metadata";


const app: Application = express()

const port: number = 3001 || process.env.PORT


const httpServer = createServer(app);

const io = new Server(httpServer, {

})

httpServer.listen(port, function () {
    console.log(`App is listening on port ${port} !`);

})

