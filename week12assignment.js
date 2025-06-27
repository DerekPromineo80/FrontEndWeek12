/* Week 12 Assignment By Derek McGuire */

let messageList = [];

async function loadMessagesData() {
    const response = await fetch ("http://localhost:3000/messages");
    const fetchedData = await response.json();
    messageList = fetchedData;
    renderMessageList();
};
loadMessagesData();

const messagesListDiv = document.getElementById("messages-list");
const newMessageTextarea = document.getElementById("new-message-text");

function renderMessageList() {
    messagesListDiv.innerHTML = "";

    for (const message of messageList) {
        const div = document.createElement("div");
        div.style.width = "500px";
        div.style.margin = "left";
        div.style.backgroundColor = "rgb(27,207,207)";
        div.innerHTML = `
            <h4>${message.username} posted:</h4>
            <p>${message.text}</p>
            <p>On ${message.sent}</p>
        `;
        let button = document.createElement('button');
        button.innerText = "x";
        button.className = "manitoba";
        button.addEventListener("click", () => this.deleteMessage(message));
        div.append(button);
        const h5 = document.createElement("h5");
        const hr = document.createElement("hr");
        messagesListDiv.appendChild(div);
        messagesListDiv.appendChild(h5);
        messagesListDiv.appendChild(hr);
    };
};

const today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
const year = today.getFullYear();

month = month < 10 ? "0" + month: month;
day = day < 10 ? "0" + day: day;

const formattedDate = `${month}/${day}/${year}`;


async function handleSend() {
    const newMessage = {
        username: "Amy",
        sent: formattedDate,
        read: false,
        text: newMessageTextarea.value
    };
    newMessageTextarea.value = "";

    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    });

    const newlyCreatedMessage = await response.json();
    console.log(newlyCreatedMessage);

    messageList.push(newlyCreatedMessage);
    renderMessageList();
};

async function handleSendTwo() {
    const newMessageTwo = {
        username: "Brendan",
        sent: formattedDate,
        read: false,
        text: newMessageTextarea.value
    };
    newMessageTextarea.value = "";

    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessageTwo)
    });

    const newlyCreatedMessageTwo = await response.json();
    console.log(newlyCreatedMessageTwo);

    messageList.push(newlyCreatedMessageTwo);
    renderMessageList();
};

async function handleSendThree() {
    const newMessageThree = {
        username: "Cheryl",
        sent: formattedDate,
        read: false,
        text: newMessageTextarea.value
    };
    newMessageTextarea.value = "";

    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessageThree)
    });

    const newlyCreatedMessageThree = await response.json();
    console.log(newlyCreatedMessageThree);

    messageList.push(newlyCreatedMessageThree);
    renderMessageList();
};

async function handleSendFour() {
    const newMessageFour = {
        username: "Dustin",
        sent: formattedDate,
        read: false,
        text: newMessageTextarea.value
    };
    newMessageTextarea.value = "";

    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessageFour)
    });

    const newlyCreatedMessageFour = await response.json();
    console.log(newlyCreatedMessageFour);

    messageList.push(newlyCreatedMessageFour);
    renderMessageList();
};

function deleteMessage(message) {
    let url2 = "http://localhost:3000/messages";
    fetch(`${url2}/${message.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json());
};
