
const animals = [
    {
        "name": "Clementine",
        "species": "Squirrel",
        "where": "Strand Bookstore, New York",
        "when": 2023,
        "brand": "Jellycat",
        "img": "images/image15.png "
    },
    {
        "name": "Fuddlewuddle",
        "species": "Dragon",
        "where": "Birthday Present",
        "when": 2023,
        "brand": "Jellycat",
        "img": "images/image16.png "
    },
    {
        "name": "Clover",
        "species": "Puppy",
        "where": "Amazon",
        "when": 2022,
        "brand": "Warmies",
        "img": "images/image14.png "
    },
    {
        "name": "Magnolia Button",
        "species": "Bunny",
        "where": "Paper Source, New York",
        "when": 2024,
        "brand": "Jellycat",
        "img": "images/image18.png "
    },
    {
        "name": "Frog Ellie",
        "species": "Frog",
        "where": "Build-a-Bear, Dallas",
        "when": 2023,
        "brand": "Build-a-Bear",
        "img": "images/image13.png "
    },
    {
        "name": "Jellybean",
        "species": "Goat",
        "where": "Christmas Present",
        "when": 2023,
        "brand": "ebba Sherbert Sweeties\n",
        "img": "images/image17.png "
    },
    {
        "name": "Apple Pochacco",
        "species": "Puppy",
        "where": "Present",
        "when": 2018,
        "brand": "Sanrio",
        "img": "images/image10.png "
    },
    {
        "name": "Donald Duck",
        "species": "Duck",
        "where": "Disney World, Orlando",
        "when": 2019,
        "brand": "Disney",
        "img": "images/image19.png"
    },
    {
        "name": "Willow Shine",
        "species": "Chick",
        "where": "Present",
        "when": 2023,
        "brand": "Pillow Pet",
        "img": "images/image20.png"
    },
    {
        "name": "Boo",
        "species": "Owl",
        "where": "TJ Maxx, New York",
        "when": 2022,
        "brand": "Warmies",
        "img": "images/image21.png"
    },
    {
        "name": "Rainbow Whale",
        "species": "Whale",
        "where": "Arcade, Michigan ",
        "when": 2022,
        "brand": "Unknown",
        "img": "images/image12.png "
    },
    {
        "name": "Dolphin",
        "species": "Dolphin ",
        "where": "Present",
        "when": 2020,
        "brand": "Unknown",
        "img": "images/image11.png "
    },
    {
        "name": "Share Bear",
        "species": "Bear",
        "where": "Christmas Present",
        "when": 2020,
        "brand": "Care Bear",
        "img": "images/image22.png"
    },
    {
        "name": "Leaf",
        "species": "Sloth",
        "where": "Everland, Seoul",
        "when": 2022,
        "brand": "Everland ",
        "img": "images/image23.png"
    },
    {
        "name": "Unnamed",
        "species": "Bunny",
        "where": "Unknown",
        "when": 2014,
        "brand": "Unknown",
        "img": "images/image4.png "
    },
    {
        "name": "Unnamed",
        "species": "White Tiger",
        "where": "Everland, Seoul",
        "when": 2016,
        "brand": "Everland ",
        "img": "images/image3.png "
    },
    {
        "name": "Unnamed",
        "species": "Unicorn",
        "where": "Disney World, Orlando",
        "when": 2019,
        "brand": "Beanie Babies",
        "img": "images/image5.png "
    },
    {
        "name": "Unnamed",
        "species": "Donkey",
        "where": "Unknown",
        "when": 2015,
        "brand": "Unknown",
        "img": "images/image2.png "
    },
    {
        "name": "Panda One",
        "species": "Panda",
        "where": "Ikea",
        "when": 2020,
        "brand": "Ikea",
        "img": "images/image9.png "
    },
    {
        "name": "Starlight",
        "species": "Reindeer",
        "where": "Christmas Present",
        "when": 2023,
        "brand": "Jellycat",
        "img": "images/image8.png "
    },
    {
        "name": "Lavender ",
        "species": "Teddy Bear",
        "where": "Unknown",
        "when": 2004,
        "brand": "Unknown",
        "img": "images/image6.png "
    },
    {
        "name": "Mr Raindeer ",
        "species": "Raindeer",
        "where": "Present",
        "when": 2023,
        "brand": "Hersheys",
        "img": "images/image1.png "
    },
    {
        "name": "Mabel",
        "species": "Mashmallow ",
        "where": "FAO Schwarz, New York",
        "when": 2023,
        "brand": "Jellycat",
        "img": "images/image24.png"
    },
    {
        "name": "Dumbo",
        "species": "Elephant",
        "where": "Present",
        "when": 2017,
        "brand": "Disney",
        "img": "images/image7.png "
    },
    {
        "name": "Panda Two",
        "species": "Panda ",
        "where": "Everland, Seoul",
        "when": 2017,
        "brand": "Everland ",
        "img": "images/image25.png"
    }
]


window.addEventListener("load",()=>{
    displayData(animals)

})


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  

function displayData(animals){
    var container = document.getElementById('output-container');  
    container.innerHTML = "";


    shuffle(animals);

    for (let animal of animals){
    const itemElement = document.createElement("div");
    itemElement.addEventListener("click", ()=>{
        activatePopUp(animal);
    })
    itemElement.innerHTML = buildAnimalListItem(animal);

    container.appendChild(itemElement);
    }
}



const activatePopUp = function(animal){


    console.log(animal);
    document.getElementById("output-container").classList += 'activate';
    var popUp = document.getElementById("popup");
    popUp.style.display = "block";
    var popUpDetails = document.getElementById("pop-up-details");
 popUpDetails.innerHTML = buildAnimalDetailItem(animal);
    
}



const buildAnimalListItem = function(animal){
    return `<div class="container">
    <img class="image" src = '${animal.img}'/>    
    </div>`;
}

const buildAnimalDetailItem = function(animal){
    return `<div class="detail-view">
    <img class="detailimg" src = '${animal.img}'/> 
    <div class="info"> 
    <h3> ${animal.name}</h3>  
    <h4> ${animal.species}</h4>  
    <br>
    <br>
    <p> ${animal.when}</p>  
    <p> ${animal.where}</p>  
    <h5> ${animal.brand}</h5>
    </div>  

    </div>`;
}
