const toggleSwitch = document.querySelector('.theme-switch>input[type="checkbox"]');
const docElement = document.documentElement;
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(mode) {
    const isDark = mode === DARK_THEME? true : false;
    localStorage.setItem('theme',mode);
    docElement.setAttribute('data-theme',mode);
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'Light Mode' ;
    isDark? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    :toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode(mode);

}

// Switch Theme dynamically
function switchTheme(event) {
    if (event.target.checked){
        toggleDarkLightMode(DARK_THEME);
    }
    else {
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// Event Listiners
toggleSwitch.addEventListener('change', switchTheme)

// Check local storage for theme
const currentTheme = localStorage.getItem('theme') || LIGHT_THEME
if (currentTheme === DARK_THEME){
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
}
else {
    toggleDarkLightMode(LIGHT_THEME);
}
