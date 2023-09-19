const menuBtn= document.querySelector('#menu-btn');
const  header= document.querySelector('.header')
const themeToggler= document.querySelector('#theme-toggler');
const body= document.querySelector('body');

//  when the hamburger menu is clicked, change it to x and show the menu

menuBtn.onclick= ()=>{
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    header.classList.toggle('active');
    console.log(menuBtn.classList);
    console.log(header.classList);
}
// change theme from light to dark

themeToggler.onclick= () => {
    themeToggler.classList.toggle('fa-sun')
    body.classList.toggle('dark-mood');
}

// to roll the navigation out of the screen after 
// clicking on a navigation link
const myHeader= document.querySelector('#header');
const navItems= document.querySelectorAll(".nav-item");
navItems.forEach(navItem => {
    navItem.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    header.classList.toggle('active');
    });
});



// contact me section
//to clear the form after sending the message
const inputBoxes= document.querySelectorAll('.input-box');
const contactTextArea= document.getElementById('contact-text-area');
const submitBtn= document.getElementById('submit-btn');

inputBoxes.forEach(inputBox =>{
    submitBtn.addEventListener('click',()=>{
        inputBox.value="";
        contactTextArea.value="";
    });   
});