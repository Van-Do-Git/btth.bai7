let ketqua;
function chuyendoi(){
    let sotien=+document.getElementById("sotien").value;
    let tutien=+document.getElementById("tutien").value;
    let thanhtien=+document.getElementById("thanhtien").value;
    ketqua = (sotien*tutien/thanhtien)
    document.getElementById("ketqua").innerText=ketqua;
}