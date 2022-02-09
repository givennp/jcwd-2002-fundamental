class Product {
    constructor(productName, price){
        this.productName = productName;
        this.price = price;
        this.qty = 0;
    }

    calculateTotalPrice = () => {
        return this.price * this.qty;
    }
}

    class Book extends Product {
        constructor(productName,price,author, pages){
            super(productName, price);
            this.author = author;
            this.pages = pages;
        }
    }

    console.log(new Book("Harry Potter", 10000, "J. K. Rowling", 728));




    class Shirt{
        constructor(size){
            this.size = size;
        }
    }

