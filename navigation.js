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
    if (projectTitle==='ARMEbookMart') {
        projectContainer.innerHTML = `<div class="project-box">
        <div class="project-title">SignUpLoginAPI</div>
        <img class="project-image" src="signuplogin.png" alt="SignUPLoginAPI">
        <div class="button-container">
            <a class="button" href="https://ankitgadling.co/" target="_blank">View Code</a>
            <a class="button" href="https://ankitgadling.co/" target="_blank">Demo</a>
            <a href="#" onclick="changeProject()" class="button" href="">Previous Project</a>
        </div>
    </div>`;
        
    } else {
        projectContainer.innerHTML = `<div class="project-box">
        <div class="project-title">ARMEbookMart</div>
        <img class="project-image" src="dashboard.jpeg" alt="ARMEbookMart">
        <div class="button-container">
            <a class="button" href="https://ankitgadling.co/" target="_blank">View Code</a>
            <a class="button" href="https://ankitgadling.co/" target="_blank">Demo</a>
            <a href="#" onclick="changeProject()" class="button" href="">Next Project</a>
        </div>
    </div>`;
    }
}

    const form = document.getElementById("form");
    const result = document.getElementById("result");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      result.innerHTML = "Please wait...";
    
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = "Message sent successfully!";
            form.reset();
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          setTimeout(() => {
            result.innerHTML="";
          }, 5000);
        });
    });

function darkmode(){
    const mode=document.getElementById("darkmode").innerHTML;
    if (mode==='dark_mode') {
      document.getElementById("darkmode").innerHTML="light_mode";
      document.body.style.background = "linear-gradient(135deg, #3494E6, #EC6EAD)";
    } else {
      document.getElementById("darkmode").innerHTML="dark_mode";
      document.body.style.background = "linear-gradient(135deg, #1F1C2C, #6D435A)";
      // document.getElementById("navigation").style.background="linear-gradient(135deg, #1F1C2C, #6D435A)";

    }
}