const contactsPage = function(){
    //contacts 
    const contacts = document.createElement('div'); //main wrapper
    contacts.setAttribute('id', 'contacts');
    
    const numbers = document.createElement('div'); //rightside
    numbers.setAttribute('id', 'numbers');
    const topNumbers = document.createElement('div'); 
    topNumbers.setAttribute('id', 'topNumbers');
    const bottomNumbers = document.createElement('div');
    bottomNumbers.setAttribute('id', 'bottomNumbers');
    
    const location = document.createElement('div'); //leftside
    location.setAttribute('id', 'location'); 
    
    //numbers section 
    const hotLines = document.createElement('div');
    hotLines.setAttribute('id', 'hotLines');
    const hotLinesTitle = document.createElement('h3');
    hotLinesTitle.innerText = 'Hotlines to deliver hot fishes :';
    const hotLine1 = document.createElement('p');
    const hotLine2 = document.createElement('p');
    const hotLine3 = document.createElement('p');
    hotLine1.innerText = '8-800-555-3535';
    hotLine2.innerText = '8-800-555-3535';
    hotLine3.innerText = '8-800-555-3535';
    
    hotLines.appendChild(hotLinesTitle);
    hotLines.appendChild(hotLine1);
    hotLines.appendChild(hotLine2);
    hotLines.appendChild(hotLine3);
    
    const emails = document.createElement('div');
    emails.setAttribute('id', 'emails');
    const emailsTitle = document.createElement('h3');
    emailsTitle.innerText = 'Please send your request and complains here :';
    const emaile1 = document.createElement('p');
    const emaile2 = document.createElement('p');
    emaile1.innerText = 'zalupa@zhop.net';
    emaile2.innerText = 'zhopa@zalup.net';
    
    emails.appendChild(emailsTitle);
    emails.appendChild(emaile1);
    emails.appendChild(emaile2);
    
    topNumbers.appendChild(hotLines);
    topNumbers.appendChild(emails);
    
    
    // manager contact section
    const managerContacts = document.createElement('div');
    managerContacts.setAttribute('id', 'managerContacts');
    
    const managerSelfie = document.createElement('img');
    managerSelfie.src = "http://purmix.ru/images/uroki/karand/anime/kak_narisovat_i_raskrasit_ulybayushuyusya_anime_devushku.jpg";
    managerSelfie.setAttribute('id', 'selfie');
    
    const managerTitle = document.createElement('h3');
    managerTitle.innerText = 'Join us today, send your CV to become part of our Family';
    
    const managerNumber = document.createElement('p');
    const managerEmail = document.createElement('p');
    managerNumber.innerText = '2-283-221-4777';
    managerEmail.innerText = 'sosiZalupu@naebalovo.com';
    
    managerContacts.appendChild(managerSelfie);
    managerContacts.appendChild(managerTitle);
    managerContacts.appendChild(managerNumber);
    managerContacts.appendChild(managerEmail);
    
    bottomNumbers.appendChild(managerContacts);
    
    numbers.appendChild(topNumbers);
    numbers.appendChild(bottomNumbers);
    
    //location section 
    const loactionTitle = document.createElement('h3'); 
    loactionTitle.innerText = 'Find us here'; 
    
    const locationImg = document.createElement('img');
    locationImg.src = 'https://docs.microsoft.com/ru-ru/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png';
    
    const locationAdress = document.createElement('h4');
    locationAdress.innerText = 'Baker st. 18/35, Entry from the backstreet';
    
    const restNumber = document.createElement('p') ;
    restNumber.innerText = 'Reserve a table: +010111011101';
    
    location.appendChild(loactionTitle);
    location.appendChild(locationImg);
    location.appendChild(locationAdress);
    location.appendChild(restNumber);
    
    contacts.appendChild(location);
    contacts.appendChild(numbers);
    
    content.appendChild(contacts);
    }

    export default contactsPage;