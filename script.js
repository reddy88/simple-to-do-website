const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    let task = inputBox.value;
    if(inputBox === ''){
        alert('You must write something');
    }else{
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        listItem.classList.add('unchecked');
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.textContent = '\u00d7';  
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
loadData();