const books = [ {
    "name": "leo",
    "arms":2,
    "legs":2,
    "nose":1,
    "hat":1,
    "shellColor":"none",
    "image":"none"
},

{
    "name": "mr. snail",
    "arms":0,
    "legs":0,
    "nose":0,
    "hat":1,
    "shellColor":"pink",
    "image":"https://cdn11.bigcommerce.com/s-pmcxjxs/images/stencil/1280x1280/products/4643/5270/SAN3S-Sandy-Snail-4__67443.1673542128.jpg?c=2"

}

];

window.addEventListener('load', ()=>{
    init();
})

const init = function(){

    const bookShelf = document.getElementById("bookshelf");

    books.map(function(book){
        const bookItem = buildBookItem(book);
        bookShelf.innerHTML = bookShelf.innerHTML + bookItem;
    })
}


const buildBookItem = function (book){

        return `
        <div>
        
        <h2>${book.name}</h2>
        <h3>${book.arms}</h3>
        <img src=${book.image}>

        <p class="shell">${book.shellColor}</p>
        </div>
        `
        

}