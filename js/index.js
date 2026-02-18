//  Footer DOM
const footerEl = document.createElement("footer");

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footerEl");

const copyright = document.createElement("p");
copyright.innerHTML = `<p class="footer-style">&#169; Sumna Chea ${thisYear}</p>`;

document.body.appendChild(footerEl);
footerEl.appendChild(copyright);

//  Skills DOM
const skills = ["HTML", "CSS", "JavaScript", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

//  Form/Messages DOM
const messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(name, email, message);

    //  messages
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
    <span>Msg:  ${message}</span>`;

    //  remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        const entry = document.querySelector("button").parentNode;
        newMessage.remove();

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    // reset form
    messageForm.reset();
});


