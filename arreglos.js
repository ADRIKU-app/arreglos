let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad(){

    // Obtener el valor ingresado por el usuario
    let edad = document.getElementById("edad").value;
    
    // Verificar que el campo no esté vacío
    if(edad === ""){// ===: compara el valor y el tipo de dato
        alert("Por favor ingrese una edad");
        return;
    }

    // Convertir el valor a número
    let edadNumero = Number(edad);

    // Verificar que sea un número entero positivo
    //Number(): convierte el contenido en un valor numérico
    if(!Number.isInteger(edadNumero) || edadNumero <= 0){
    alert("Por favor ingrese un número entero positivo");
    return;
    }

    //Agregar la edad al arreglo izquierdo
    edadesIzquierda.push(edadNumero);

    //Limpiar el campo de entrada
    document.getElementById("edad").value = "";

    // Pintar el arreglo izquierdo en la tabla
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){

    //Obtener el cuerpo de la tabla
    let tabla = document.getElementById("tablaIzquierda");

    //Limpiar la tabla antes de pintar de nuevo
    tabla.innerHTML = "";

    //Recorrer el arreglo de edades y crear una fila por cada edad
    for (let i = 0; i < edadesIzquierda.length; i++) {

        //Crear una nueva fila
        let fila = document.createElement("tr");

        //Generar las tres columnas solicitdas
        fila.innerHTML = `
            <td>${edadesIzquierda[i]}</td>
            <td>
                <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">
                    Eliminar
                </button>
            </td>

            <td>
                <button class="btn-mover" onclick="moverHaciaDerecha(${i})">
                    ➜
                </button>
            </td>`;
            
            // Agregar la fila a la tabla
            tabla.appendChild(fila);
    }
}

function eliminarIzquierdo(indice){

    // Eliminar el elemento según su posición
    edadesIzquierda.splice(indice, 1);

    // Actualizar visualmente la tabla izquierda
    pintarArregloIzquierda();
}

function pintarArregloDerecha(){

    // Obtener el cuerpo de la tabla derecha
    let tabla = document.getElementById("tablaDerecha");
    
    // Limpiar la tabla antes de pintar de nuevo
    tabla.innerHTML = "";

    // Recorrer el arreglo de edadesDerecha y crear una fila por cada edad
    for( let i = 0; i<edadesDerecha.length; i++){
        let fila =document.createElement("tr");

        fila.innerHTML = `
            <td>
                <button class="btn-mover">
                    ⬅
                </button>
            </td>
            <td>${edadesDerecha[i]}</td>  
            <td>
                <button class="btn-eliminar" onclick="eliminarDerecho(${i})">
                    Eliminar
                </button>
            </td>`;
            
            // Agregar la fila a la tabla
            tabla.appendChild(fila);

    }
}

function eliminarDerecho(indice){

    // Verificar que el índice sea válido
    if (!Number.isInteger(indice) ||
        indice < 0 ||
        indice >= edadesDerecha.length) {

        return;
    }

    // Eliminar el elemento según su posición
    edadesDerecha.splice(indice, 1);

    // Actualizar visualmente la tabla derecha
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice){

    //Obtener la edad que queremos mover
    let edad = edadesIzquierda[indice];

    //Agregar la edad al arreglo derecho
    edadesDerecha.push(edad);

    //Eliminar la edad del arreglo izquierdo
    edadesIzquierda.splice(indice, 1);

    //Actualizar visualmente ambas tablas
    pintarArregloIzquierda();
    pintarArregloDerecha();
}