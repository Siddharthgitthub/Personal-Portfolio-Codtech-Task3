document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        formResponse.style.display = "block";
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;

        contactForm.reset();
        setTimeout(() => (formResponse.style.display = "none"), 3000);
    });

    // Load GitHub Projects
    const githubProjectsContainer = document.getElementById("github-projects");
    const githubUsername = "Siddharthgitthub"; // Replace with your GitHub username

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            repos.forEach((repo) => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                githubProjectsContainer.appendChild(li);
            });
        })
        .catch((error) => console.error("Error fetching GitHub repos:", error));
});
