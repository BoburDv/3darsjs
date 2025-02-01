let mmSon = +prompt("Manfiy va Musbat son uchun")
if(mmSon > 0) {
    console.log("Musbat son")
}
if(mmSon < 0){
    console.log("Manfiy son")
}

//2 - Son juft yoki toqligini aniqlash:
let tjSon = +prompt("Toq yoki Juft son uchun")
if (tjSon % 2 == 0){
    console.log(tjSon + " Juft son")
}
else {
    console.log(" Toq son")
}

//3 - Ikki sondan kattasini topish:
let kkSon = +prompt("Kichik yoki katta son uchun")
let kkSon2 = +prompt("yana kiriting")
if (kkSon < kkSon2) {
    console.log(kkSon2 + " katta")
}
if (kkSon > kkSon2){
    console.log(kkSon + " katta")
}

//4 -  Son nolga tengligini aniqlash:
let nol = +prompt("Son 0 ekanligini aniqlash")
if (nol == 0){
    console.log("Nol")
}
else{
    console.log("Nol emas")
}

//5 - Ikki son tengligini aniqlash:
let teng = +prompt("Sonlar tengligi")
let teng2 = +prompt("Yana kiriting")
if (teng == teng2){
    console.log("Teng")
}
else{
    console.log("Teng emas")
}

//6 - Bahoni aniqlash:
let baho = +prompt("0-100 gacha baho bering")
if (baho >= 80) {
    console.log("B") 
}
else if (baho >= 90) {
    console.log("A")
}

//7 - Kabisa yilini aniqlash:
let yil = +prompt("Kabisa yilini aniqlash")
console.log(yil + " Kabisa yili");

//Yosh bo‘yicha status aniqlash:
let age = +prompt("Yosh bo'yicha status aniqlash")
if (age <= 12) {
    console.log("Bolakay")
} 
else if(age <= 19) {
    console.log("O'smir")
} 
else{
    console.log("Katta yoshdagi odam")
}

// 9 ----- ??? -------
// let num1 = prompt("Katta sonni topish")
// let num2 = prompt("Yana kiriting")
// let num3 = prompt("Yana kiriting")
// if (num1 > num3) {
//     console.log(num1)
// } 
// if(num2 > num3) {
//     console.log(num2)
// }
// else{
//     console.log(num3)
// }


//10 - Haroratga qarab tavsiya berish:
let harorat = +prompt("Harorat tavsiya")
if (harorat < 0) {
    console.log("Sovuq")
} 
else if (harorat > 30) {
    console.log("Issiq")
}

//12 - Sonning 5 ga qoldiqsiz bo'linishi 
let number = +prompt("Qoldiqsiz bo'lish")
if (number % 5 == 0){
    console.log("Bo'linadi")
} 
else{
    console.log("Bo'linmaydi")
}

//13 - Harorat mezoni:
let harorat2 = prompt("Harorat kiriting")
if (harorat2 >= 15){
    if (harorat2 <= 25 ){
        console.log("Ideal harorat")
    } 
    else{
        console.log("Ideal harorat emas")
    }
}

//14 - Foydalanuvchi tug'ilgan yilini tekshirish:
let year = prompt("Tug'ilgan yilingizni kiriting")
if (year < 2000) {
    console.log("Eski avlod")
} 
else{
    console.log("Yangi avlod")
}

          ///----!---- 14/21


//21 - Yosh bo‘yicha tavsiyalar:
let yosh = prompt("Yoshingizni kiriting")
if (yosh < 18){
    console.log("Yoshlarga tavsiya")
} 
else if(yosh > 60){
    console.log("Keksalarga tavsiya")
}
else{
    console.log("Sizga mos")
}

//22 - Yozilgan ism uzunligi:
let Ism = prompt("Qisqa yoki uzun ism")
if (Ism.length < 5){
    console.log("Qisqa ism")
}
else{
    console.log("Mos ism")
}

//23 - Son musbat yoki nol bo‘lsa, “Yaroqli son” deb chiqaring.
let ySon = prompt("Yaroqli musbat yoki yaroqsiz")
if (ySon >= 0){
    console.log("Yaroqli son")
} 
else{
    console.log("Yaroqsiz son")
}

//24 - Agar ikkita raqam bir xil bo‘lsa “Teng juftlik”
let Json1 = prompt("Juft son uchun")
let Json2 = prompt("Yana kiting")
if (Json1 == Json2){
    console.log("Teng juftlik")
} 
else {
    console.log("Juftlik emas")
}

//25 - Raqam oxiri 0 bilan tugashini aniqlash:
let nol0 = prompt("son oxiri 0 bilan tugashi")
if (nol0 % 10 == 0){
    console.log("Nol bilan tugaydi")
} 
else{
    console.log("Nol emas")
}

//26 ----- ??? -------


//27 - Bahor oyini aniqlash:
let oy = prompt("Oy raqamini kiriting")
if (oy == 3){
    console.log("Bahor")
} 
else if(oy == 4){
    console.log("Bahor")
} 
else if(oy == 5){
    console.log("Bahor")
}
else{
    console.log("Bahor emas")
}

//28 - Juft toq son va u nechiga tengligini chiqarish:
let Tson = prompt("Toq yoki juft son")
if (Tson % 2 == 0){
    console.log(Tson + " Juft son")
} 
else {
    console.log(Tson + " Toq son")
}

//29 - Sonning 10 dan kichikligini tekshirish:
let Kson = prompt("10 dan kichik son")
if (Kson < 10){
    console.log("Kichik son")
}
else{
    console.log("10 dan katta")
}

//30 ----- ??? -------


//31 - “Frontend” yoki “Backend” kiritgan bo‘lsa “Dasturchi” deb chiqaring.
let kasb = prompt("Frontend yoki Backend")
if(kasb == "Frontend"){
    console.log("Dasturchi")
} 
if(kasb == "Backend") {
    console.log("Dasturchi")
}

//32 - Millatni aniqlash:
let millat = prompt("Millatingizni kiriting")
if (millat == "Uzbek") {
    console.log("Assalomu alaykum")
}

//33 - Sonning 3 ga bo'linishi:
let bSon = prompt("3 ga bo'linadigan son")
if (bSon % 3 === 0){
    console.log("Bo'linadi")
}

//32 --- ??? ----
//33 ----???-----
// let kSon = prompt("To'g'ri kvadrat")
// if (kSon == Math()* 2) {
//     console.log("Kvadrat son")
// }


///35 - 6-18 orasida bo‘lsa, “Kunduz” aks holda “Tun”
let hour = prompt("Soatni kiriting:")
if (hour >= 6) {
    if (hour <= 18){
        console.log("Kunduz")
    } 
} 
else{
    console.log("Tun")
}

//36 - Son musbat yoki nol ekanligini tekshirish:
let Yson = prompt("musbat yoki nol tekshirish")
if (Yson >= 0) {
    console.log("Yaroqli son")
}
else{
    console.log("Yaroqsiz")
}

//38 - Matn uzun bo‘lsa “Uzun matn” deb chiqaring.
let text = prompt("Uzun matin (5+)")
if(text.length < 7){
    console.log("Qisqa matn")
} 
else{
    console.log("Uzun matn")
}

//39 - Raqamlar juftligiga qarash:
let Traqam = prompt("Raqamlar juftligiga qarash")
if (Traqam % 2 == 0){
    console.log("Juft raqam")
}
else{
    console.log("Toq raqam")
}

//40 ----???----

//41 - Yo‘l harorati tavsiyasi:
let Yharorat = prompt("Yo'l harorati")
if (Yharorat < 0){
    console.log("Yo'lda ehtiyot bo‘ling")
}

//42 - Ikki matn bir xil ekanligini tekshirish:
let bRaqam = prompt("Bir xil matin kiriting")
let bRaqam2 = prompt("yana kiriting")
if (bRaqam == bRaqam2){
    console.log("Matnlar bir xil")
} 
else{
    console.log("Matnlar farq qiladi")
}

//44 - Son teskarisi musbat bo‘lsa, “Musbat teskari” deb chiqaring.
let tr = prompt("Teskari raqamlar")
if(-tr > 0) {
    console.log("Musbat teskari")
}

//45
let temperature = prompt("Haroratni kiriting:")
if (temperature > 35){
    console.log("Xavfli issiq!")
}

