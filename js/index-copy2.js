let dc = document.querySelector('.dynamic-content'); // get class="dynamic-content" in HTML as 'dc'
let error = document.querySelector('.error'); // get class="error" in HTML as 'error'
// define the location of the data in 'url'
let url = './partials/home.json';

// fetch function requires a url from where the data is fetched
// fetch gets the data from url and returns it for further handling 
// store the data from url as 'p'
let p = fetch(url);

// setting up the handling of 'p' (the data from the url from fetch())
p
// first .then() will take 'p' as a para 'response' and runs a function..
.then(function (response) {

    // 'statusText' is a keyword that takes the result of the function as either 'OK' or not
    // if the statusText of response is 'OK'...
    if (response.statusText === 'OK') {
        // return the data converted to json str (via json())
        return response.json();
    } 
    // error here (when the above if statement does not apply, 'throw' will happen)
    // 'throw' is a keyword that emits what will be handled in .catch() when the response is negative
    throw new Error(response.statusText);
})
// second .then() will receive the response from the first .then() as para:'data' and runs the function
.then(function (data) {
    // console.log(data);
    // creating markup - takes the 'data' para (which is the json object with a bunch of data)
    let markup = `
        <ul>
            <li>${data.list[0].title}</li>
            <li>${data.list[0].artist}</li>
        </ul>
    `;
    dc.innerHTML = markup;
})
.catch(function (err) {
    error.innerText = err.message;
});