import start from '../src/start';
import menu from '../src/menu';
import about from '../src/about';
import contact from '../src/contact';

const content = document.getElementById("content_body");
content.appendChild(start());

const showMenu = () => {
    content.innerHTML = '';
    content.appendChild(menu());
}

const showAbout = () => {
    content.innerHTML = '';
    content.appendChild(about());
}

const showContact = () => {
    content.innerHTML = '';
    content.appendChild(contact());
}

const menuButton = document.querySelector("#menu_button");
menuButton.addEventListener('click', showMenu);

const aboutButton = document.querySelector("#about_button");
aboutButton.addEventListener('click', showAbout);

const contactButton = document.querySelector("#contact_button");
contactButton.addEventListener('click', showContact);