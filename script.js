var score = prompt("masukkan nilai anda");

if (score >=90){
    console.log("Selamat! anda mendapat nilai A.");
}else if (score >=80 || score <=89){
    console.log("anda mendapat nilai B+.");
}else if (score >=70 || score <=79){
    console.log("anda mendapat nilai B-.");
}else if (score >=60 || score <=69){
    console.log("anda mendapat nilai C+.");
}else{
    console.log("maaf anda tidak lulus");
}