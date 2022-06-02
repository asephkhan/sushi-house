//menu buutons
const starterBtutton = document.querySelector('.starter-button');
const mainDishBtutton = document.querySelector('.main-dish-button');
const dessertButton = document.querySelector('.dessert-button');

//  data

const menuData = document.querySelector('.menu-container')
const menuDataArray = Array.from(menuData.children)

const starterMenuData = menuDataArray[0]
const mainDishMenuData = menuDataArray[1]
const dessertMenuData = menuDataArray[2]

/* console.log(menuDataArray) */


// starter button event listner

starterBtutton.addEventListener('click', e => {
    starterMenuData.style.display = 'block';
    mainDishMenuData.style.display = 'none';
    dessertMenuData.style.display = 'none';  

})

// main-dish button event listner

mainDishBtutton.addEventListener('click', e =>{
    starterMenuData.style.display = 'none';
    mainDishMenuData.style.display = 'block';
    dessertMenuData.style.display = 'none';
})

// desert button event listner

dessertButton.addEventListener('click', e => {
    starterMenuData.style.display = 'none';
    mainDishMenuData.style.display = 'none';
    dessertMenuData.style.display = 'block'; 
})