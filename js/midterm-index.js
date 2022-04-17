const resources = { // define resources
    btns: document.querySelectorAll('.controls ul li button'), // define btns
    dc: document.querySelector('.dynamic-content'), // define 'dc' == where to output contents
    // nav: document.querySelectorAll('header nav ul a')
    
    // TODO: I want to use fetch(url) to access the data in .json... 
    // url: './database/content.json'

};

// TODO: I want to move it to database/ as .json
// (hard-coding the content for now... )

const contents = { 
    c1: {
        heading: 'This is How Much One LED Bulb Can Save',
        bodyText: 'Light emitting diodes (LEDs) are a type of solid-state lighting - semiconductors that convert electricity into light. Although once known mainly for indicator and traffic lights, LEDs in white light, general illumination applications are today\'s most energy-efficient and rapidly-developing lighting technology. LEDs use up to 90% less energy and last up to 25 times longer than traditional incandescent bulbs. LED technology is available in many lighting product types including replacements for 40W, 60W, 75W, and 100W traditional incandescent bulbs, reflector bulbs used in recessed fixtures, and track lights, task lighting, undercabinet lighting, and outdoor area lights. LEDs come in a variety of colors, and some bulbs can be tuned to different colors or different hues of white light.  Some are dimmable or offer convenient features such as daylight and motion sensors. <br><br>LEDs work well indoors and outdoors because of their durability and performance in cold environments. Look for LED products such as pathway lights, step lights, and porch lights for outdoor use. You can also find solar-powered LED outdoor lighting.  The cost of LED light bulbs has decreased dramatically since they entered the market and prices are expected to come down further as more products become available. While LEDs are more expensive than traditional incandescent bulbs, they still save money because they last a long time and have very low energy use. (Reference: U.S. Department of Energy)',
        imageURL: 'img1.jpg',
        imageAlt: 'Image of LED light bulbs'
    },
    c2: {
        heading: 'Cycling for Healthier You and The Planet',
        bodyText: 'It only takes two to four hours a week to achieve a general improvement to your health. <br>Cycling is:<br> 1. Low impact - it causes less strain and injuries than most other forms of exercise.<br>2. A good muscle workout - cycling uses all of the major muscle groups as you pedal.<br>3. Easy - unlike some other sports, cycling does not require high levels of physical skill. Most people know how to ride a bike and, once you learn, you don\'t forget.<br>4. Good for strength and stamina - cycling increases stamina, strength and aerobic fitness.<br>5. As intense as you want - cycling can be done at very low intensity to begin with, if recovering from injury or illness, but can be built up to a demanding physical workout.<br>6. A fun way to get fit - the adventure and buzz you get from coasting down hills and being outdoors means you are more likely to continue to cycle regularly, compared to other physical activities that keep you indoors or require special times or places.<br>7. Time-efficient - as a mode of transport, cycling replaces sedentary (sitting) time spent driving motor vehicles or using trams, trains or buses with healthy exercise. (Reference: State Government of Victoria, Australia)',
        imageURL: 'img3.jpg',
        imageAlt: 'Image of a red bike'
    },
    c3: {
        heading: 'Rain Water Harvesting',
        bodyText: 'Rainwater can help supplement a home\'s water supply in regions facing water scarcity due to droughts or population growth straining the existing supply. For regions with plenty of water, rainwater harvesting can help reduce greenhouse gas emissions associated with treating and pumping water from a centrally located municipal plant. Rainwater harvesting can also help reduce stormwater runoff from the home—relieving some of the stress on aging municipal stormwater systems. Rainwater harvesting is less energy-intensive than other alternate sources of water such as desalination and water recycling. It\'s also free of minerals, thus reducing scale buildup in pipes, and it is sodium-free, which can be good for persons on low-sodium diets if used for drinking water.  Rainwater harvesting benefits our environment and pocketbooks:<br> - Conserves drinking water by reducing consumption of municipally treated water, particularly if used for irrigation during dry periods.<br> - Lowers water bills thanks to reduced dependence on municipal water supplies.<br> - Helps to reduce basement flooding in older urban areas by decreasing the amount of rainwater leaving the property and entering storm sewers (these sewers can back up during large storms, which can lead to flooding).<br> - Helps to replenish groundwater supplies by using stormwater on site where it can percolate into the ground and by capturing overflows in cases where the rainwater tank overflows are handled on the home\'s property (by a rain garden, weeping tile and/or dry well). (Reference: Government of Canada)',
        imageURL: 'img2.jpg',
        imageAlt: 'Image of water beads'
    },
};   

// load default content on page load 

// TODO: I want to make it smarter...
// hard-coding the markup for now... 

resources.dc.innerHTML = `
    <h2>${contents['c1'].heading}</h2>
    <figure>
        <img src="./img/${contents['c1'].imageURL}" alt="${contents['c1'].imageAlt}" />
    </figure>
    <p>${contents['c1'].bodyText}</p>
`;


// function to change the content dynamically as per user action
let handleClick = e => { // take the selected button click as 'e' and..
    let currentButton = e.target; // pass the selected button as a target
    let currentContent = currentButton.dataset.btn; // save the selected button's dataset 

    // output HTML as follows
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                              <figure>
                                <img src="./img/${contents[currentContent].imageURL}" alt="${contents[currentContent].imageAlt}" />
                              </figure>
                              <p>${contents[currentContent].bodyText}</p>`;

    
    // Dynamically change which item to apply #active style  
    // loop through 'nav' & remove 'id="active"'
    for (let btn of resources.btns) { 
        if (btn.id) { // if the item has 'id'...
            btn.removeAttribute('id'); // remove 'id' attribute from the item
        }
    }
    
    // add attribute 'id="active"' to the clicked item (activeItem)
    currentButton.id = 'active';

}

// turn all buttons into eventListener
for (let btn of resources.btns) { 
    btn.addEventListener('click', handleClick); // listen for the click and run handleClick()
};