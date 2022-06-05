//menu buutons
const starterBtutton = document.querySelector(".starter-button");
const mainDishBtutton = document.querySelector(".main-dish-button");
const dessertButton = document.querySelector(".dessert-button");

//  data

const menuData = document.querySelector(".menu-container");
const menuDataArray = Array.from(menuData.children);

 const starterMenuData = menuDataArray[0]; 
 const mainDishMenuData = menuDataArray[1];
 const dessertMenuData = menuDataArray[2]; 

 console.log(menuDataArray) 

 const hide = (elements) => {
  elements = elements.length ? elements : [elements];
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
};

 const show = (elements) => {
  elements = elements.length ? elements : [elements];
  
  for (let i = 0; i < elements.length; i++) {
      
    elements[i].style.display = 'inline'

  }
};  


function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }
}

// window on load show the main dishes menu

window.onload = () =>{
    
    show(mainDishMenuData);
    hide(starterMenuData);
    hide(dessertMenuData);
}

// starter button event listner

starterBtutton.addEventListener("click", (e) => {
  function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }
  show(starterMenuData);
  hide(mainDishMenuData);
  hide(dessertMenuData);
});

// main-dish button event listner

mainDishBtutton.addEventListener("click", (e) => {
  show(mainDishMenuData);
  hide(starterMenuData);
  hide(dessertMenuData);
});

// desert button event listner

dessertButton.addEventListener("click", (e) => {
  show(dessertMenuData);
  hide(starterMenuData);
  hide(mainDishMenuData);
});
