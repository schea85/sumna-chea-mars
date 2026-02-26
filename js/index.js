//  Footer DOM
const footerEl = document.createElement("footer");

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footerEl");

const copyright = document.createElement("p");
copyright.innerHTML = `<p class="footer-style">&copy; ${thisYear} Sumna Chea</p>`;

document.body.appendChild(footerEl);
footerEl.appendChild(copyright);

//  Skills DOM
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "VSCode"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
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
    const messagesHeader = document.querySelector(".messages-header");
    
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
    <span class="msg-box">${message}</span>`;

    //  remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();

        // messages header
        if (messageList.children.length === 0){
            messagesHeader.style.display = "none";
        }

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messagesHeader.style.display = "block";
    

    // reset form
    messageForm.reset();
});

// github api
fetch("https://api.github.com/users/schea85/repos")
    .then((response) => response.json())
    .then((repositories) => {
        console.log(repositories);

        // projects dom
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");

        // repositories list 
        // for (let i = 0; i < repositories.length; i++){
        // const project = document.createElement("li");
        // project.innerText = `${repositories[i].name}`;
        // projectList.appendChild(project);
        // }

        // filtered projects
        const projects = ["calculator", "etch-a-sketch", "rock-paper-scissors-game", "weather-api"];
        const screenshots = {
            "calculator": "img/calculator.png",
            "etch-a-sketch": "img/etchasketch.png",
            "rock-paper-scissors-game": "img/RPS.png",
            "weather-api": "img/weather-api.png"
        };
        

        const filteredProjects = repositories.filter(repo => 
            projects.includes(repo.name)
        );
        
        filteredProjects.forEach(repo => {
            const project = document.createElement("li");

            const imgSrc = screenshots[repo.name];
            project.innerHTML = `
                <div class="project-card">
                    <img src="${imgSrc}" alt="project screenshot" class="project-img">
                    <a href="${repo.html_url}" target="_blank">
                        ${repo.name.toUpperCase().split("-").join(" ")}
                    </a>
                </div>
            `;
            projectList.appendChild(project);
        });
        

    })
    .catch((error) => {
        console.error("Error:", error);
    })

