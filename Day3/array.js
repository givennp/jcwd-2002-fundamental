// array
const books = [
    "LOTR", //0
    "Harry Potter", //1
    "Sherlock", //2
    "Naruto", //3
    "One Piece" //4
];

// jadi suka the hobbit
books.push("The Hobbit")
books.push("Bleach")
books.push("Test")

// console.log(books.length);
// console/log(books.length);


// console.log(books[3]);

// untuk modify data
// books[3] = "boruto"

// console.log(books);

// console.log(books[books.length - 1]);
// console.log(books[books.indexOf("Naruto")]);

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

// ============duplicate indexOf==============
// let searchBooks = "Naruto"
// let resultIndex;
// for (let i = 0; i < books.length; i++) {
//     if (books[i] == searchBooks) {
//         resultIndex = i;
//         break
//     }
// }
// console.log(resultIndex);

// books.sort();

// const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40];

// cara hapus
// numbers.splice(3, 1);

// console.log(numbers);

const sentence = "Halo selamat datang di rumah saya";

const words = sentence.split(" ");

console.log(words)