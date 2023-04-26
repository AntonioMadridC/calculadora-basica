function getValue(value){
    var disp = document.getElementById("disp").value;
    document.getElementById('disp').value = disp + value;
}

function solve(){
    var disp = document.getElementById("disp").value;
    // console.log(math.evaluate(disp));
    document.getElementById("disp").value = math.evaluate(disp)
}

function solveAC(){
    document.getElementById("disp").value = null;
    console.log("ok");
}