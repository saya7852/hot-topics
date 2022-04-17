// this is the index.js for FP: Hot Topics (Loaded Content by Ajax)
const resources = { // define resources
    btns: document.querySelectorAll('.navbar ul li button'), // define btns - all buttons that should be acknowleded are listed here
    dc: document.querySelector('.dynamic-content'), // define 'dc' == where to output contents

    error: document.querySelector('.error'), // define error area in HTML

};

let url = './partials/home.html';


let p = fetch(url);
p // fetch data from the url...
.then(response => {
    if (response.statusText = 'OK') {
        return response.text();
    }
    throw new Error(response.statusText);
}) // then take the response from fetch() and return the text()
.then(data => {
    resources.dc.innerHTML = data;
})
.catch(err => {
    resources.error.innerHTML = err.message;
}); // then take the returned data and put it in 'dc' as innerHTML to output


let handleClick = e => {
    
    let currentButton = e.target;
    // data-btn is either "hm"(home) or "wk"(work/projects) - save whichever selected dataset as 'currentContent' (so this will be used to find the correct url)
    let currentContent = currentButton.dataset.btn; 

    if (currentContent === 'wk') {
        url = './partials/portfolio.html'; 
        // resources.dc.innerHTML = 'wk';
    } else if (currentContent === 'hm') {
        url = './partials/home.html';
    }
    let p = fetch(url);
    p // fetch data from the url...
    .then(response => {
        if (response.statusText = 'OK') {
            return response.text();
        }
        throw new Error(response.statusText);
    }) // then take the response from fetch() and return the text()
    .then(data => {
        resources.dc.innerHTML = data;
    })
    .catch(err => {
        resources.error.innerHTML = err.message;
    });

    
    for (let btn of resources.btns) { 
        if (btn.id) { // if the item has 'id'...
            btn.removeAttribute('id'); // remove 'id' attribute from the item
        }
    }
    
    // add attribute 'id="active"' to the clicked item (activeItem)
    currentButton.id = 'active';
    // return url;
}

    // declare a function that takes an argument from handleClick() which is the url according to the dataset from user input 
    // and run getData() => the url should be used as an arg in fetch() => if response, check status => if 'OK', return the response.text(), if not, throw new Error(response.statusText)
    // then take the returned data & render as innerHTML in 'dc'/ else, catch err and render as innerHTML in 'error'


for (let btn of resources.btns) { 
    btn.addEventListener('click', handleClick); // listen for the click and run handleClick()
};


