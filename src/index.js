//mainPage module

const mainPage = (function(){ 
    
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

    //main info 
    const infoWrapper = document.createElement('div');
    infoWrapper.setAttribute('id', 'infoWrapper');
    
    const info = document.createElement('div');
    info.setAttribute('id', 'info');

    const restorauntName = document.createElement('h1');
    restorauntName.innerText = 'FLOWER\'s MAFIA';

    const restorauntImage = document.createElement('img');
    restorauntImage.src = 'https://static.designmynight.com/uploads/2020/08/Ping-Pong-Southbank-optimised.jpg'

    const description = document.createElement('p');
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    info.appendChild(restorauntName);
    info.appendChild(restorauntImage);
    info.appendChild(description);
    

    //main info subsection reviews

    const recensies = document.createElement('div'); 
    recensies.setAttribute('id', 'recensies');

    const review1 = document.createElement('div');
    const reviewer1 = document.createElement('h1');
    reviewer1.innerText = 'blabla';
    const reviewGuts1 = document.createElement('p');
    reviewGuts1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et';
    review1.appendChild(reviewer1);
    review1.appendChild(reviewGuts1);

    const review2 = document.createElement('div');
    const reviewer2 = document.createElement('h1');
    reviewer2.innerText = 'blabla';
    const reviewGuts2 = document.createElement('p');
    reviewGuts2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et';
    review2.appendChild(reviewer2);
    review2.appendChild(reviewGuts2);

    const review3 = document.createElement('div');
    const reviewer3 = document.createElement('h1');
    reviewer3.innerText = 'blabla';
    const reviewGuts3 = document.createElement('p');
    reviewGuts3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et';
    review3.appendChild(reviewer3);
    review3.appendChild(reviewGuts3);

    recensies.appendChild(review1)
    recensies.appendChild(review2)
    recensies.appendChild(review3)
    recensies.setAttribute('id', 'recensies');

    //appending mainsection together
    info.appendChild(recensies)
    infoWrapper.appendChild(info)
    content.appendChild(infoWrapper)

    //footer
    const footer = document.createElement('footer')
    content.appendChild(footer)
})(); 
