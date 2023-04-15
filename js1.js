function calculate(){
    pods = document.getElementById("pods").value;
    grains = document.getElementById("grains").value;
    weights = document.getElementById("weights").value;

    cal = (pods+grains+weights)/10000;
    document.getElementById("yield").innerHTML =cal;
}

function blur(){
    document.getElementById("no1").style.filter = "blur(3Px)";
}

function subtract(){
    investment = document.getElementById("investment").value;
    income = document.getElementById("income").value;

    cal = investment-income;
    document.getElementById("yield").innerHTML =cal;
}