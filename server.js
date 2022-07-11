import http from "http";
import SocketIO from "socket.io"
import express from "express";
import { Socket } from "dgram";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views")
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req,res) => res.render("home"));
app.get("/*", (req, res) => res.render("home"))

const httpServer = http.createServer(app)//http server
const wsServer = SocketIO(httpServer)

wsServer.on("connection", (socket) => {
    socket.onAny((event)=> {
        console.log(`Socket Event : ${event}`)
    })
    socket.on("enterRoom", (roomName, done) => {
        socket.join(roomName)
        done()
        socket.to(roomName).emit("welcome");
    // socket.on("enterRoom", (roomNumber, done) => {
    //     console.log(socket.id)
    //     console.log(socket.rooms);
    //     socket.join(roomNumber)
    //     console.log(socket.rooms);
    //     setTimeout(() => { done("hello from the back-end") }, 15000)
    })
})

//wsServer.on("connection", (socket) => { //socketIO Callback
    //socket.on("enterRoom", (msg, done) => {     
        //console.log(msg);
        // setTimeout(() => {
        //     done();
        // }, 10000)
    //})
//})

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);