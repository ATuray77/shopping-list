
// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
//     `;

// });

// function showKeyCodes(e) {
//     const insert = document.getElementById('insert');
//     insert.innerHTML = ' ';

//     const keyCodes = {
//         'e.key': e.key === ' ' ? 'space' : e.key,
//         'e.keyCode': e.keyCode,
//         'e.code': e.code,
//     };
//     for (let key in keyCodes) {
//         const div = document.createElement('div')
//         div.className = 'key'
//         const small = document.createElement('small')

//         const keyText = document.createTextNode(key)
//         const valueText = document.createTextNode(keyCodes[key]);

//         small.appendChild(keyText);
//         div.appendChild(valueText)
//         div.appendChild(small);

//         insert.appendChild(div)

//     }
// }




// window.addEventListener('keydown', showKeyCodes);

// const itemInput = document.getElementById('item-input')
// const priorityInput = document.getElementById('priority-input')
// const checkbox = document.getElementById('checkbox')
// const heading = document.querySelector('h1')
// const form = document.getElementById('item-form')


// function onInput(e) {
//     heading.textContent = e.target.value
// }


// function onChecked(e) {
//     const isChecked = e.target.checked
//     heading.textContent = isChecked ? 'Checked' : 'Not Checked'
// }

// function onFocus(){
//     itemInput.style.outlineStyle = 'solid';
//     itemInput.style.outlineWidth = '4px';
//     itemInput.style.outlineColor = 'pink';
// }

// function onBlur() {
//     itemInput.style.outlineStyle = 'none';
// }




// function onSubmit(e) {
//     e.preventDefault();
    
//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     if(item === '' || priority === '0'){
//         alert('Please fill in all fields');
//         return;
//     }
//     console.log(item, priority)
// }

// function onSubmit2(e) {
//     e.preventDefault;
//     const formData =  new FormData(form)
//     // const item = formData.get('item')
//     // const priority = formData.get('priority')
//     const entries = formData.entries();
//     //console.log(entries);

//     for (let entry of entries) {
//         console.log(entry)
//     }
// }

// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);
// form.addEventListener('submit', onSubmit)
// form.addEventListener('submit', onSubmit2)

// const listItems = document.querySelectorAll('li') 
// const list = document.querySelector('ul')

// // listItems.forEach((item) => {
// //     item.addEventListener('click', e => {
// //         e.target.remove();
// //     });
// // });

// list.addEventListener('click', (e) => {
//     if(e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })

// list.addEventListener('mouseover', (e) => {
//     if(e.target.tagName === 'LI') {
//         e.target.style.color = 'red';
//     }
// });

// window.addEventListener('scroll', () => {
//     console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`);
    
//     if (window.scrollY > 70) {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';

//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// })


const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');



function addItem(e) {
    e.preventDefault();

    const NewItem = itemInput.value
    //validate Input
    if (NewItem === ''){
        alert('Please add an item');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(NewItem))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);
    itemList.appendChild(li);

    itemInput.value = ' ';
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




//Event Listeners
itemForm.addEventListener('submit', addItem);
