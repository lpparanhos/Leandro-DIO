function soma(){
    var n1 = document.getElementById("n1").value;
    n1 = Number(n1)
    var n2 = document.getElementById("n2").value;
    n2 = Number(n2)
    var resultado = n1 + n2;
    document.getElementById("resultado").innerHTML += resultado;
}