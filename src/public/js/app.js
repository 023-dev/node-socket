const socket = io();

const welcome = document.getElementById("welcome")
const form = welcome.querySelector("form")

function backEndDone(message){
    console.log(`back-end says : ${message}`)
}

function handleRoomSubmit(event){
    event.preventDefault()
    const input = form.querySelector("input")
    socket.emit("enterRoom", {payload : input.value}, backEndDone)
    //socket.emit("enterRoom", {payload : input.value}, () => {console.log("server is done")}) //socketIO Callback
    input.value = ""
}

form.addEventListener("submit", handleRoomSubmit)