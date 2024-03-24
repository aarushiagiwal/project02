fetch('./animals.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (animals) {
        console.log(animals); // Log the animals data to the console
        displayData(animals);
    });

function displayData(animals){
    var container = document.getElementById('output-container');  
    container.innerHTML = "";
    
    for (let animal of animals){
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `<div class="container">
    <img src = '${animal.img}'/>    
    </div>`

    container.appendChild(itemElement);
    }
}
