// this is the index.js for FP: Hot Topics (Loaded Content by Ajax)
const resources = { // define resources
    btns: document.querySelectorAll('.navbar ul li button'), // define btns - all buttons that should be acknowleded are listed here
    dc: document.querySelector('.dynamic-content'), // define 'dc' == where to output contents

    error: document.querySelector('.error'), // define error area in HTML

    url: './partials/home.html'

};

// let url = './partials/home.html';


fetch(resources.url) // fetch data from the url...
.then(response => response.text()) // then take the response from fetch() and return the text()
.then(data => resources.dc.innerHTML = data); // then take the returned data and put it in 'dc' as innerHTML to output


let handleClick = e => {
    let currentButton = e.target;
    // data-btn is either "hm"(home) or "wk"(work/projects) - save whichever selected dataset as 'currentContent' (so this will be used to find the correct url)
    let currentContent = currentButton.dataset.btn; 

    console.log(currentButton);
    console.log(currentContent);
    
    if (currentContent === 'wk') {
        resources.url = './partials/portfolio.html'; 
    } 
    

    for (let btn of resources.btns) { 
        if (btn.id) { // if the item has 'id'...
            btn.removeAttribute('id'); // remove 'id' attribute from the item
        }
    }
    
    // add attribute 'id="active"' to the clicked item (activeItem)
    currentButton.id = 'active';
    
}


for (let btn of resources.btns) { 
    btn.addEventListener('click', handleClick); // listen for the click and run handleClick()
};