function searchItems(){
    // Get search term
    let searchTerm = document.getElementById("search").value;
    // create Regex
    let search = new RegExp(searchTerm, 'i');

    // get element to write products to
    let list = document.getElementById("products")

    fetch("https://enigmatic-meadow-17195.herokuapp.com/viewprods/")
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        let searchedItems = data.filter(product => {
            return product.title.search(search) != -1 || product.description.search(search) != -1;
        })

        console.log(searchedItems);
        list.innerHTML = ''
        if (searchedItems.length > 0){
            searchedItems.forEach((product) => {
                list.innerHTML += `
                <div class="product-container">
                    <div class="product-image">
                    <img src=${product.image}/>
                    </div>
                    <div class="product-info">
                    <h4>${product.title}</h4>
                    <h4>${product.description}</h4>
                    <h4>${product.price}</h4>
                    <h4>${product.availability}</h4>
                    <button class="btn" type="submit">Add to cart</button>
                    </div>
                </div>
                `;
                });
        } else {
            list.innerHTML = `No results found for "${ searchTerm }"`
        }
        });
}
