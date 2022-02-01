import mainPage from "./mainPage";
import menuPage from "./menuPage";
import contactsPage from "./contactPage";

const content = document.getElementById('content');

//header 
const header = document.createElement('header');
const mainPageLink = document.createElement('div');
const menuPageLink = document.createElement('div');
const contactsPageLink = document.createElement('div');

mainPageLink.innerText = 'About Us';
menuPageLink.innerText = 'Menu';
contactsPageLink.innerText = 'Contacts';

menuPageLink.style.margin = '0 1%';

header.appendChild(mainPageLink);
header.appendChild(menuPageLink);
header.appendChild(contactsPageLink);

content.appendChild(header);

contactsPage();