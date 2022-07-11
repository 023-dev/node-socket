const messageList = document.querySelector("ul")
const messageForm = document.querySelector("#message")
const nicknameForm = document.querySelector("#nickname")
const socket = new WebSocket(`ws://${window.location.host}`)

function makeMessage(type, payload){
    const message = {type, payload}
    return JSON.stringify(message);
}

socket.addEventListener("open", () => {
    console.log("서버에 연결되었습니다.")
})

socket.addEventListener("message",(message)=> {
    const li = document.createElement("li")
    li.innerText = message.data
    messageList.append(li)
})

socket.addEventListener("close", () => {
    console.log("서버로부터 연결이 끊겼습니다.")
})

// setTimeout(() => {
//     socket.send("사용자가 메시지를 보냈습니다.")
// }, 10000)

// function handleSubmit(event) {
//     event.preventDefault();
//     const input = messageForm.querySelector("input");
//     console.log(input.value);
// }

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message",input.value));
    const li = document.createElement("li")
    li.innerText = `You : ${input.value}`
    messageList.append(li)
    input.value = "";
  }

function handlerNickSubmit(nickname){
    nickname.preventDefault();
    const input = nicknameForm.querySelector("input")
    socket.send(makeMessage("nickname",input.value))
    
}

messageForm.addEventListener("submit", handleSubmit);
nicknameForm.addEventListener("submit", handlerNickSubmit)