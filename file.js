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
let yoshi = +prompt("Yosh bo'yicha status aniqlash")
if (yoshi <= 12) {
    console.log("Bolakay")
} 
else if(yoshi <= 19) {
    console.log("O'smir")
} 
else{
    console.log("Katta yoshdagi odam")
}

// 9 --- ??? ------
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
let Yyil = prompt("Tug'ilgan yilingizni kiriting")
if (Yyil < 2000) {
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

//26 --- ??? ------


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

//30 --- ??? ------


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

//34 --- ??? ------
//35 --- ??? ------
// let kSon = prompt("To'g'ri kvadrat")
// if (kSon == Math()* 2) {
//     console.log("Kvadrat son")
// }


///36 - 6-18 orasida bo‘lsa, “Kunduz” aks holda “Tun”
let soat = prompt("Soatni kiriting:")
if (soat >= 6) {
    if (soat <= 18){
        console.log("Kunduz")
    } 
} else{
    console.log("Tun")
}

//37 - Son musbat yoki nol ekanligini tekshirish:
let Yson = prompt("musbat yoki nol tekshirish")
if (Yson >= 0) {
    console.log("Yaroqli son")
}
else{
    console.log("Yaroqsiz")
}

//38 - Matn uzun bo‘lsa “Uzun matn” deb chiqaring.
let matn5 = prompt("Uzun matin (5+)")
if(matn5.length < 7){
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

//40 --- ??? ------


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

///43 --- ??? ------


//44 - Son teskarisi musbat bo‘lsa, “Musbat teskari” deb chiqaring.
let tr = prompt("Teskari raqamlar")
if(-tr > 0) {
    console.log("Musbat teskari")
}

//45 - 35 dan yuqori bo‘lsa “Xavfli issiq!” deb chiqaring.
let harorat3 = prompt("Haroratni kiriting:")
if (harorat3 > 35){
    console.log("Xavfli issiq!")
}

//46 Raqamlar nisbiy qiymati:
let numb1 = prompt("Katta kichik son")
let numb2 = prompt("Yana kiriting")
if (numb1 > numb2){
    console.log("Katta son")
} 
else if(numb1 < numb2){
    console.log("Kichik son")
}

//48 - Sonning teskarisi musbat ekanligini aniqlash:
let mtes = prompt("Teskari musbat")
if (-mtes > 0){
    console.log("Musbat teskarilik")
}

//49 - Oy raqami asosida faslni aniqlang:
let fasl = prompt("Fasilni aniqlash 1/12")
if (fasl == 3) {
    console.log("Bahor")
} 
if (fasl == 5) {
    console.log("Bahor")
} 
if (fasl == 4) {
    console.log("Bahor")
} 
if (fasl == 6) {
    console.log("Yoz")
} 
if (fasl == 7) {
    console.log("Yoz")
} 
if(fasl == 8) {
    console.log("Yoz")
} 
if (fasl == 9) {
    console.log("Kuz")
} 
if (fasl == 10) {
    console.log("Kuz")
} 
if (fasl == 11) {
    console.log("Kuz")
} 
if(fasl == 12) {
    console.log("Qish")
} 
if(fasl == 1) {
    console.log("Qish")
} 
if(fasl == 2) {
    console.log("Qish")
} 

//50 - 2025 yuqori bo‘lsa “Kelajak yili” deb chiqaring:
let kyil = prompt("2025/yuqori yil kiriting")
if (kyil > 2025){
    console.log("Kelajak yili")
}
else(
    console.log("O'tgan yillar")
)