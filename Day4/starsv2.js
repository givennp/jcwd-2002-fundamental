function generateStars(rows) {
    // rows untuk memulai baris
    for (let i = 1; i <= rows; i++) {
        let stars = ""
        for (let j = 0; j < i; j++) {
            // mcolums -> untuk membuat kolom
            stars += "* " //concat

        }

        console.log(stars);
    }
}

generateStars(8)