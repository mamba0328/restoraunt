import mainPage from "./mainPage";
import menuPage from "./menuPage";
import contactsPage from "./contactPage";

const content = document.getElementById('content');

//header 
const header = document.createElement('header');
const mainPageLink = document.createElement('div');

mainPageLink.addEventListener('click', () => {
    clearPage();
    mainPage();
})

const menuPageLink = document.createElement('div');

menuPageLink.addEventListener('click', () => {
    clearPage();
    menuPage();
})
const contactsPageLink = document.createElement('div');

contactsPageLink.addEventListener('click', () => {
    clearPage();
    contactsPage();
})

mainPageLink.innerText = 'About Us';
menuPageLink.innerText = 'Menu';
contactsPageLink.innerText = 'Contacts';

menuPageLink.style.margin = '0 1%';

header.appendChild(mainPageLink);
header.appendChild(menuPageLink);
header.appendChild(contactsPageLink);

let pages = Array.from(header.children); 

pages.forEach(page => { 
    page.addEventListener('mouseover', (e) => {
        e.target.style.color = 'white';
    })

    page.addEventListener('mouseout', (e) => {
        e.target.style.color = 'black';
    })

})

const clearPage = function() { 
    content.innerHTML = ''; 
    header.appendChild(mainPageLink);
    header.appendChild(menuPageLink);
    header.appendChild(contactsPageLink);
    content.appendChild(header);
}




content.appendChild(header);
mainPage();


