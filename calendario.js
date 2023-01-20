

function fecha() {
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let aio = document.getElementById('aio').value;


    let fecha = new Date (aio, --mes, dia).getDay();
   

 return fecha;
}

function diaSemana() {
    let d = fecha ();
    switch (d){
        case 0: 
        return document.getElementById('resultado').innerHTML="Domingo hoy no es laboral";

        case 1: 
        return document.getElementById('resultado').innerHTML="Lunes hoy si es laboral";

        case 2: 
        return document.getElementById('resultado').innerHTML="Martes hoy si es laboral";

        case 3: 
        return document.getElementById('resultado').innerHTML="Miercoles hoy si es laboral";

        case 4: 
        return document.getElementById('resultado').innerHTML="Jueves hoy si es laboral";

        case 5: 
        return document.getElementById('resultado').innerHTML=" Viernes hoy si es laboral";

        case 6: 
        return document.getElementById('resultado').innerHTML="Sabado hoy no es laboral";



    }
}

