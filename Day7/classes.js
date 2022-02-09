//classes

class Car {
    constructor(year, brand, color){
        this.year = year;
        this.brand = brand;
        this.color = color;
    }


}

// const mobilBaru = new Car("2000", "Toyota", "white");
// const mobilLama = new Car("1980", "Ford", "red");

// console.log(mobilBaru);

// const cars = [
//     new Car ("2000", "Toyota", "white"),
//     new Car ("1980", "Ford", "red")
// ]

// console.log(cars);


//=================================
class Book {
    constructor(title, price){
        this.title = title;
        this.price = price;
        this.qty = 2;
        this.bought = 0;
    }

    calculateTotalPrice (){
        return this.price * this.qty
    }

    toString (){
        return `${this.title} || Rp.${this.price.toLocaleString()} x ${this.qty} = Rp. ${this.calculateTotalPrice().toLocaleString()}`

    }
}

const books = [
    new Book ("LOTR", 10000),
    new Book ("Harry Potter", 7000),
    new Book ("Sherlock", 12000),
    new Book ("Naruto", 15000)
]

console.log(books[1].toString());