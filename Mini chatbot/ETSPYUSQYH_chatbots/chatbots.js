let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You", "nice to chat with you"];
let userInputEl = document.getElementById("userInput");
let chatContainerEl = document.getElementById("chatContainer");

function letsChatGo() {
    let userMsg = userInputEl.value;
    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");

    let chatbotContainer = document.createElement("div");
    chatbotContainer.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(chatbotContainer);
    chatbotContainer.appendChild(userMsgEl);
    userInputEl.value = "";
    replyfromChatbot();
}

function replyfromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];


    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);


    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);

}