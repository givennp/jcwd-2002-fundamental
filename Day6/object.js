const buku = {
    title: "Harry Potter",
    author: {
        name: "J.K rowling",
        age: 50,
        nationality: "Inggris"
    },
    pages: 658,
    yearReleased: "2001",
    alternativeTitles: ["Sang Penyihir", "The Wizard"],
    sequels: [{
            title: "Harry Potter 2",
            yearReleased: "2003"
        },
        {
            title: "Harry Potter 3",
            yearReleased: "2005"
        },
        {
            title: "Harry Potter 4",
            yearReleased: "2007"
        },
    ]
}
//object destructuring
let { yearReleased, title, pages} = buku;
console.log(yearReleased);
console.log(title);
console.log(pages);

// console.log(buku.sequels[1].yearReleased);
// add property
// buku.publisher = "purwadhika"

// // hapus property
// buku.judul = buku.title
// delete buku.title
// console.log(buku);

// dot notation
// console.log(buku.title);
// console.log(buku.author.age);
// console.log(buku.alternativeTitles[1]);



// bracket notation
// const title = "pages"
// // console.log(buku.["title"]); // title harus string
// console.log(buku[title]);

const fruit = [{
        name: "Leci",
        price: 5000
    },
    {
        name: "mangga",
        price: 7000
    },
    {
        name: "nanas",
        price: 8000
    }
]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(`Nama: ${fruit[i].name} || Harga: Rp. ${fruit[i].price.toLocaleString()},00`);

// }

const cars = [{
        brand: "Toyota",
        year: "2010",
        colors: ["Red", "Black"]
    },
    {
        brand: "Honda",
        year: "2007",
        colors: ["Gray", "Black", "White"]
    }
]

// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i]
//     let row = `Brand: ${car.brand} || Year: ${car.year} || Colors: ${car.colors.join(" ")} ` //join = untuk gabungin isi array. parameter untuk misahin tiap index

//     //kalau gapake join, pake looping lagi
//     // for (let j = 0; j < car.colors.length; j++) {
//     //     row += `${car.colors[j]} `
        
//     // }
//     console.log(row)
// }