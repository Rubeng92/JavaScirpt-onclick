 function getCompatibilityStyles(elemento, estilo){ 
        if(document.body.currentStyle){ // IE
            return elemento.currentStyle[estilo]; 
        }else if (window.getComputedStyle){ // Mozilla,Chrome
            return window.getComputedStyle(elemento, null).getPropertyValue(estilo); 
        }else{ 
            return elemento.style[estilo];// Otros          
        }
    } 
 function setCompatibilityStyles(elemento, estilo, valor){ 
        if(document.body.currentStyle){ // IE
            elemento.currentStyle[estilo] = valor;
        }else if (window.getComputedStyle){ // Mozilla,Chrome
            window.getComputedStyle(elemento, null).setProperty(estilo,valor);
        }else{ 
            elemento.style[estilo] = valor;
        }
    } 
function modificarColorDeFondo(capa){
        //var caja2 = document.getElementById("cuadro2");
        //alert("Color" + caja1.querySelector("#caja1").getAttribute("background-color"));
        //alert("Color" + caja1.className("#cuadro1").getAttribute("background-color"));
        //caja1.setAttribute("style","background-color:green;");
        //cuadro.style.backgroundColor = "green";
        //document.bgColor = capa.style.backgroundColor;
        //document.querySelector('#cuadro1').setAttribute("background-color","green");
        //alert("1. Ejecutando función");    
        /*document.bgColor = capa.getAttribute("style").
                backgroundColor;*/
        //document.bgColor = document.querySelector('#cuadro1').getAttribute("background-color");
        alert("Color: " + getCompatibilityStyles(capa,'background-color'));    
        document.body.style.backgroundColor = getCompatibilityStyles(capa,'background-color');
        var cuadro2 = document.getElementById("cuadro2");
        cuadro2.style.backgroundColor = "blue";
        //cuadro2.style["background-color"] = "blue";
        //document.bgColor = getCompatibilityStyles(capa,'background-color');
        //caja2.style.backgroundColor = getCompatibilityStyles(capa,'background-color');
        //setCompatibilityStyles(caja2,'background-color','blue');
        //capa.setAttribute("style","background-color:green;");    
        //document.bgColor = caja1.style["background-color"];
        //document.bgColor = cuadro.style["background-color"];
        //cuadro.style["background-color"] = 'green';
        //[background-color]
        //alert("Ejecutando función");
        }