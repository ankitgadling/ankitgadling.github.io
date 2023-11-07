function setupPage() {
    // Your code here to run when the page loads
    console.log('Page is loaded!');
    section=document.getElementById("home")
    section.style.left = '0';
}

// Call the setupPage function to run it when the page loads
window.addEventListener('load', setupPage);

const elements = document.querySelectorAll('.navigation li');
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // Your click event handler code here
        const Id = element.getAttribute('data-id');
        console.log('Element clicked: ', Id);
        // You can perform any action you want when an element is clicked
        sections=document.querySelectorAll('section')
        sections.forEach(function(section){
            if(section.id==Id){
                 section.style.left = '0';
            }
            else{
                section.style.left='-100%';
            }
        })
    });
});

function getInTouch(){
    contact=document.getElementById('contact');
    home=document.getElementById('home');
    home.style.left='-100%';
    contact.style.left = '0';
}

function changeProject() {
    const projectContainer = document.querySelector('.project-container');
    const projectTitle=document.querySelector('.project-title').innerHTML;
    if (projectTitle==='Project 1') {
        projectContainer.innerHTML = `<div class="project-box">
        <div class="project-title">Project 2</div>
        <div class="project-description">The Smart Home Automation System is an innovative project designed to transform your ordinary home into a futuristic, intelligent living space. Imagine having complete control over your home's lighting, temperature, security, and entertainment systems, all from the palm of your hand. This project aims to provide a seamless and efficient way to manage your home's functionalities for convenience, security, and energy efficiency.</div>
        <img class="project-image" src="signuplogin.png" alt="Project 1 Image">
        <div class="button-container">
            <a class="button" href="https://ankitgadling.co/" target="_blank">View Code</a>
            <a class="button" href="https://ankitgadling.co/" target="_blank">Demo</a>
            <a href="#" onclick="changeProject()" class="button" href="">Previous Project</a>
        </div>
    </div>`;
        
    } else {
        projectContainer.innerHTML = `<div class="project-box">
        <div class="project-title">Project 1</div>
        <div class="project-description">The Smart Home Automation System is an innovative project designed to transform your ordinary home into a futuristic, intelligent living space. Imagine having complete control over your home's lighting, temperature, security, and entertainment systems, all from the palm of your hand. This project aims to provide a seamless and efficient way to manage your home's functionalities for convenience, security, and energy efficiency.</div>
        <img class="project-image" src="dashboard.jpeg" alt="Project 1 Image">
        <div class="button-container">
            <a class="button" href="https://ankitgadling.co/" target="_blank">View Code</a>
            <a class="button" href="https://ankitgadling.co/" target="_blank">Demo</a>
            <a href="#" onclick="changeProject()" class="button" href="">Next Project</a>
        </div>
    </div>`;
    }
}