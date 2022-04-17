// this is the rough outlines needed for FP JS Hot Topic


// get the reference to the active sections of the HTML
// TODO: reference to buttons
let btns = document.querySelectorAll('.navbar ul li button');
// TODO: reference to the dynamic content (where content will be output in the HTML)
let dc = document.querySelector('.dynamic-content');

// TODO: setup the path to the default content to be loaded on page load
let ct = './partials/home.html';

function getInput() {
    let userInput = false;
    return new Promise(function (yes, no) {
        if (userInput) {
            yes('content A');
        } else {
            no('content B');
        }
    })
}

let whichContent = getInput();

whichContent
    .then(function (btnPush) {
        console.log(btnPush);
    })
    .catch(function (noBtn) {
        console.log(noBtn);
    });


// TODO: create the function that will contain fetch() - need parameter for url (where the data is)
// fetch(ct) // fetch data from the url...
// .then(response => {
//     if (response.statusText = 'OK') {
//         return response.text();
//     }
//     throw new Error(response.statusText);
// }) // then take the response from fetch() and return the text()
// // then take the returned data and put it in 'dc' as innerHTML to output
//         // TODO: fetch(url).then(result).then(data).catch(err)...
// .then(data => {
//     resources.dc.innerHTML = data;
// })
// .catch(err => {
//     resources.error.innerHTML = err.message;
// }); 
// // TODO: close function

// // TODO: call the function that handles ajax here

// // TODO: create event-handler that will run when click happens
// let handleClick = e => {
    
//     let currentButton = e.target;
//     // data-btn is either "hm"(home) or "wk"(work/projects) - save whichever selected dataset as 'currentContent' (so this will be used to find the correct url)
//     let currentContent = currentButton.dataset.btn; 

//     if (currentContent === 'wk') {
//         url = './partials/portfolio.html'; 
//         // resources.dc.innerHTML = 'wk';
//     } 


//     for (let btn of resources.btns) { 
//         if (btn.id) { // if the item has 'id'...
//             btn.removeAttribute('id'); // remove 'id' attribute from the item
//         }
//     }
    
//     // add attribute 'id="active"' to the clicked item (activeItem)
//     currentButton.id = 'active';
// }
//     // TODO: preventDefault (so the data stays for handling)
//     // TODO: get the reference to currently clicked event-target-object and collect the relative path from href attribute
//     // TODO: update the value of the initially set path to the partial
//     // TODO: call the function that handles ajax with the updated values of the parameter for url parameter
// // event handler function ends here

// // TODO: register buttons (for both HOME and PORTFOLIO) of the nav items
// for (let btn of resources.btns) { 
//     btn.addEventListener('click', handleClick); // listen for the click and run handleClick()
//     clicked = true;
// };