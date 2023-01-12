

let mat, turk, tarh;
mat=parseInt(prompt("matematik notu"));
turk=parseInt(prompt("türkçe notu"));
tarh= parseInt(prompt("tarih notu"));

let ort= Math.round((mat + turk + tarh)/3);




if(mat>=50){
    console.log("Matematikten Geçtiniz..");
    document.getElementById("mat").innerHTML="Matematikten Geçtiniz..";
}

else if(mat<50){
    console.log("Matematikten Kaldınız..")
    document.getElementById("mat").innerHTML="Matematikten Kaldınız..";
}

if(turk>=50){
    console.log("Türkçeden Geçtiniz..")
    document.getElementById("turk").innerHTML="Türkçeden Geçtiniz..";
}

else if(turk<50){
    console.log("Türkçeden Kaldınız..")
    document.getElementById("turk").innerHTML="Türkçeden Kaldınız..";
}

if(tarh>=50){
    console.log("Tarihten Geçtiniz..")
    document.getElementById("tarh").innerHTML="Tarihten Geçtiniz..";
}

else if(tarh<50){
    console.log("Tarihten Kaldınız..")
    document.getElementById("tarh").innerHTML="Tarihten Kaldınız..";
}

console.log(`Tüm derslerinizin ortlaması ${ort}`);
document.getElementById("ort").innerHTML="Tüm Derslerinizin Ortalaması: " + ort;