class Product{
    name;
    prices;
    category;
    discription;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

        addToCart(){
            console.log("Product added to cart");
        }
        removeFromCart() {
            console.log("Product removed from cart");
        }
        displayProduct() {
        console.log("Product displayed");
        }
         
        buyProduct() {
        console.log("Product bought");
        }

}
let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);

console.log(iphone);
