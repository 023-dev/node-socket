const socket = io();

const welcome = document.getElementById("welcome")
const form = welcome.querySelector("form")
const room = document.getElementById("room")

room.hidden = true

let roomName;

function showRoom(){
    room.hidden = false
    welcome.hidden = true
    const h3 = room.querySelector("h3")
    h3.innerText = `${roomName}방 입니다.`
}




function handleRoomSubmit(event){
    event.preventDefault()
    const input = form.querySelector("input")
    socket.emit("enterRoom", {payload : input.value}, showRoom)
    //socket.emit("enterRoom", {payload : input.value}, () => {console.log("server is done")}) //socketIO Callback
    roomName = input.value
    input.value = ""
}

form.addEventListener("submit", handleRoomSubmit)