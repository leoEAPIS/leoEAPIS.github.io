let flag = 1;



function extraer() {
    let nombre = document.getElementById('apellidonombre').value;
    let partes = nombre.split(" ");

    document.getElementById('apepaterno').value = partes[0];
    document.getElementById('apmaterno').value = partes[1];
    for (let i = 0; i < partes.length; i++) {
        if (i >= 2) {
            document.getElementById("nombres").value += partes[i] + " ";
        }
    }

    document.getElementById("la").value = partes[0].length + partes[1].length;

    var fecha = new Date();
    fecha = document.getElementById('fechan').value;
    meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var mes_name = fecha.split("-");
    var mes = parseInt(mes_name[1] - 1);
    document.getElementById("mes").value = meses[mes];
    document.getElementById("edad").value = "".concat(calcularEdad(fecha), " a\xF1os");

    document.getElementById('apepaterno').style.color = "black";
    document.getElementById('apmaterno').style.color = "black";
    document.getElementById('nombres').style.color = "black";
    document.getElementById('la').style.color = "black";
    document.getElementById('mes').style.color = "black";
    document.getElementById('edad').style.color = "black";
}

calcularEdad = function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
        edad--;
    }
    return edad;
}