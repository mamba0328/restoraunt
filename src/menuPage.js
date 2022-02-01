const menuPage = function(){
    const content = document.getElementById('content');
    //menu 
    
    const menu = document.createElement('div');
    const allDishes = [];
    
    class dish {
        constructor(name, price, description, weight, img){
            this.name = name
            this.price = price;
            this.description = description;
            this.weight = weight;
            this.img = img; 
        }
    
        showOnPage(){ //make the dish appear on the screen
            menu.setAttribute('id', 'menu');
            const dishHolder = document.createElement('div'); 
            dishHolder.classList.add('dishHolder');
    
            const nameHolder = document.createElement('h1');
    
            const priceHolder = document.createElement('h3');
            const weightHolder = document.createElement('h3');
            const dishFooter = document.createElement('div');
            dishFooter.classList.add('dishFooter');
    
            const descriptionHolder = document.createElement('p');
            const picture = document.createElement('img');
    
            nameHolder.innerText = this.name; 
            descriptionHolder.innerText = this.description;
            weightHolder.innerText = this.weight;
            priceHolder.innerText = this.price;
            picture.src = this.img
    
            dishFooter.appendChild(weightHolder);
            dishFooter.appendChild(priceHolder);
            
            dishHolder.appendChild(nameHolder);
            dishHolder.appendChild(picture);
            dishHolder.appendChild(descriptionHolder);
            dishHolder.appendChild(dishFooter);
            
            menu.appendChild(dishHolder);
        }
    }
    
    function addADish(title,name, price, description, weight, img){
        title = new dish(name, price, description, weight, img);
        title.showOnPage();
        allDishes.push(title); 
    }
    
    addADish('fish','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish2','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish3','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish4','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish5','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish6','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish7','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish8','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    addADish('fish9','Fabulous fish', '200 grn', 'good looking fish', '8 grms', 'https://n1s2.hsmedia.ru/99/51/ea/9951eac22829b3741d0638ef88ac4630/728x542_0xac120003_12911858611633094723.jpeg')
    
    content.appendChild(menu);
    }
    
    export default menuPage;