const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')
let isEditMode = false;



function displayItems() {
    const itemFromStorage = getItemsFromStorage();
    itemFromStorage.forEach((item) => {
        addItemToDom(item)
    });
    checkUI();
}


function onAddItemSubmit(e) {
    e.preventDefault();

    const NewItem = itemInput.value
    //validate Input
    if (NewItem === ''){
        alert('Please add an item');
        return;
    }
    //create item DOM element
   addItemToDom(NewItem)

   //Add item to local storage
   addItemToStorage(NewItem);

    //check UI again after we add an item
    checkUI();

    itemInput.value = ' ';
 }

 //function to cerate DOM element and add them to DOM
function addItemToDom(item) {
      // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    //console.log(li)
 
    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);
 
     // add li to the DOM
    itemList.appendChild(li);
}

// //function to add items to local storage
function addItemToStorage(item) {
    const itemFromStorage = getItemsFromStorage()

   
    //adds new item to array
    itemFromStorage.push(item);

//convert to json string and set to local storage
localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

//my custom function to remove item from local storage...not working
// function removeItemFromStorage () {
//     const grabFromStorage = getItemsFromStorage()
//     // localStorage.removeItem(grabFromStorage);
//     localStorage.clear(grabFromStorage);
// }


//get items from storage
function getItemsFromStorage() {
    let itemFromStorage;
    if (localStorage.getItem('items') === null){
        itemFromStorage = [];
    }else {
        itemFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemFromStorage
}




function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        seItemToEdit(e.target);
    }
}

function seItemToEdit(item) {
    isEditMode = true;
    item.style.color = '#ccc'
}

//Delete function
function removeItem(item) {
    if (confirm('Are you sure')) {
        //remove item from DOM
        item.remove()

        //remove item from storage
        removeItemFromStorage(item.textContent); 
    }
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage();
    //filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i)=> i !== item );

    //Re-set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}


//clear all items function
function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
    //Clear from local storage
    localStorage.removeItem('items');
    checkUI();
}

//filter function
//remember that querySelectorAll gives you a nodelist that you can reiterate over
function filterItems (e) {
    const items = itemList.querySelectorAll('li')
    const text = e.target.value.toLowerCase();
    
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLocaleLowerCase();

        if (itemName.indexOf(text) != -1) {  //not equal to -1 means it matches
            item.style.display = 'flex';
        }else {
            item.style.display = 'none';
        }
    })
}



 //functionality to remove not display filter and clear items when there are no items on the list
function checkUI() {
    const items = itemList.querySelectorAll('li')
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}


//initialize app
function init() {
//Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem)
clearBtn.addEventListener('click', clearItems)
itemFilter.addEventListener('input', filterItems)
document.addEventListener('DOMContentLoaded', displayItems);

//checks UI before the page loads
checkUI();
}

//localStorage.setItem('name', 'Aruna');
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name');

init();


