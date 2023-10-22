function setupPage() {
    // Your code here to run when the page loads
    console.log('Page is loaded!');
    section=document.getElementById("home")
    section.style.left = '0';
}

// Call the setupPage function to run it when the page loads
window.addEventListener('load', setupPage);

const elements = document.querySelectorAll('li');
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