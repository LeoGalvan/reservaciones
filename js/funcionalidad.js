document.getElementById('temas').addEventListener("change",temaSeleccionado);
function temaSeleccionado(){
    document.getElementById("numcaj").value=null;
    document.getElementById("colorcaj").value=null;
    capas=document.getElementsByTagName("article");
    for(i=0; i<capas.length;i++){
        capas[i].style.display="none";
    }
    var articulo=document.getElementById("temas").value;
    if(articulo!=null){
        document.getElementById("bienv").style.display="none";
        document.getElementById("mostrarresultados").style.display="none";
    }
    document.getElementById(articulo).style.display="block";
}

document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});

let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    let contenido='';
    for(i=0; i<nm; i++){
        contenido+='<h3>mesa: '+(i+1)+'</h3>'+
        '<h4>Número de comensales</h4>'+
        'Adultos: <select onchange="validarCambio()" name="adultos" id="adultos'+i+'"><option value="0" id="0Ad" name="0Ad">Seleccione una opción</option><option value="1" id="1Ad" name="1Ad">1</option><option value="2" id="2Ad" name="2Ad">2</option><option value="3" id="3Ad" name="3Ad">3</option><option value="4" id="4Ad" name="4Ad">4</option></select><br>'+
        'Menores: <select name="menores" id="menores'+i+'"><option value="0" id="0Mn" name="0Mn">Seleccione una opción</option><option value="1" id="1Mn" name="1Mn">1</option><option value="2" id="2Mn" name="2Mn">2</option><option value="3" id="3Mn" name="3Mn">3</option><option value="4" id="4Mn" name="4Mn">4</option></select><br><hr>';
        function validarCambio(){
            if(document.getElementsByName("4Ad").selected){
                document.getElementsByName("menores").options[3].disabled=true;
            }
        }

    }
    document.getElementById("mesas").innerHTML=contenido;
}

let mostrar=function(){
    let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for (let i=0; i<cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for (let i=0; i<cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    window.open("ResumenReservacion.html");
}