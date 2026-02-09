// Footer DOM
const footerEl = document.createElement("footer");

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footerEl");

const copyright = document.createElement("p");
copyright.innerHTML = `<p class="footer-style">&#169; Sumna Chea ${thisYear}</p>`;

document.body.appendChild(footerEl);
footerEl.appendChild(copyright);

// Skills DOM
const skills = ["HTML", "CSS", "JavaScript", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};
