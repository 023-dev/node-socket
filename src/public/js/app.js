const messageList = document.querySelector("ul")
const messageForm = document.querySelector("form")
const socket = new WebSocket(`ws://${window.location.host}`)

socket.addEventListener("open", () => {
    console.log("서버에 연결되었습니다.")
})

socket.addEventListener("message",(message)=> {
    console.log("사용자로부터", message.data, "라는 메시지가 왔습니다.")
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
    socket.send(input.value);
    input.value = "";
  }
  
  messageForm.addEventListener("submit", handleSubmit);