document.addEventListener("DOMContentLoaded", function() {
    // Product Array
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        { id: 4, name: "Product D" }
    ];

    // Populate Product Select Options
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
