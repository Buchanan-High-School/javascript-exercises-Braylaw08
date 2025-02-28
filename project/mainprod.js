let filteredProducts = [...products]

const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm)
    })
    displayProducts()
})

function displayProducts() {
productsContainer.innerHTML = filteredProducts.map(product => {
    return `<article class="product">
                    <img src="${product.image}" alt=""/>
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${product.price}</p>
                    </footer>
                </article>`
}).join("")
}

displayProducts()