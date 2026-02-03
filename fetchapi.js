fetch("https://fakestoreapi.com/products")
    .then((res) =>res.json()
    .then((data) =>console.log(data))
    )
    .catch((error) =>console.log("Error:", error));
    async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Call the function
fetchProducts();