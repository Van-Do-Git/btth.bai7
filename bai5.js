function chuyendoi() {
    let sotien;
    let tutien;
    let thanhtien;
    sotien = document.getElementById("sotien").value;
    tutien = document.getElementById("tutien").value;
    thanhtien = document.getElementById("thanhtien").value;
    if (tutien == thanhtien){
        alert("so tien la: " + sotien);}

else{
    if (tutien=="vietnam"){
        sotien = sotien / 25000;
        alert("so tien la: " + sotien);
    }
    else {
        sotien = sotien * 25000;
        alert("so tien la: " + sotien);
    }}

}