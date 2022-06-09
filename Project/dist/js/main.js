// select items from DOM (document object model)


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');



//init menu state

let showMenu = false; 



menuBtn.addEventListener('click', toggleMenu); 




function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true; 
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        
        //set menu state
        showMenu = false; 
    }
}


    // Initialize and add the leaflet map: https://leafletjs.com/examples/quick-start/

var map = L.map('map').setView([61.06544290519407, 28.094209853965232], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([61.06544290519407, 28.094209853965232]).addTo(map);


