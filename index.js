// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// function kvadratikHesab(a, b, c) {
//     const diskriminant = b * b - 4 * a * c;

//     if (diskriminant > 0) {
//         const x1 = (-b + Math.sqrt(diskriminant)) / (2 * a);
//         const x2 = (-b - Math.sqrt(diskriminant)) / (2 * a);
//         console.log("İki həlli: x1 =", x1, "x2 =", x2);
//     } else if (diskriminant === 0) {
//         const x = -b / (2 * a);
//         console.log("Tək həl: x =", x);
//     } else {
//         console.log("Həll yoxdur.");
//     }
// }

// kvadratikHesab(1, 1, 1);


// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

// a = prompt("a dəyərini daxil edin:");
// for (let i = 1; i <= 1000; i++) {
//     if (i % a == 0) {
//         console.log(i);
//     }
// }

const arr = [2, 4, 5, 9, 1];

// 3. Bu massivin minimum elementini tapın: 

// let minElement = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//         minElement = arr[i];
//     }
// }
// console.log("Minimum element:", minElement);

// 4.Bu massivin maksimum elementini tapın
// let maxElement = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//     }
// }

// console.log("Maksimum element:", maxElement);


// 5. Bu massivin minimum elementinin indeksini tapın.

// let minElement = arr[0];
// let minIndex = 0; 

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//         minElement = arr[i];
//         minIndex = i; 
//     }
// }

// console.log("Minimum elementin indeksi:", minIndex);


// 6. Bu massivin maksimum elementinin indeksini tapın.

// let maxElement = 0;
// let maxIndex = 0; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//         maxIndex = i; 
//     }
// }
// console.log("Maksimum elementin indeksi:", maxIndex);

//  7. Tək indeksli massiv elementlərinin cəmini hesablayın

// let cem = 0;

// for (let i = 1; i < arr.length; i += 2) {
//     cem += arr[i];
// }
// console.log("Tək indeksli elementlərin cəmi:", cem);

// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// const cumle = "Code Academy Tələbəsiyəm";
// const cumleKicikHerf = cumle.toLowerCase();

// console.log(cumleKicikHerf);

// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// const cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
// const temizCumle = cumle.trim();

// console.log(temizCumle);

// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// const cumle = "Mən Code Academy Tələbəsiyəm.";
// const sozler = cumle.split(" ");
// console.log(sozler);

// 11. "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// const cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
// const herfSayi = cumle.replace(/\s+/g, "").length;

// console.log("Cümlədəki hərf sayı:", herfSayi);
