let tipo = prompt("Ingresar Tipo")


const datosBusqueda = {
    tipo: tipo,
    marca: '',
    modelo: '',
    ram: '',
    almacenamiento: ''
}
function mostrarComputadoras(computadoras){
    computadoras.forEach( computadora => {
        console.log(`Tipo: ${computadora.modelo} - Marca: ${computadora.marca} - Modelo: ${computadora.modelo} - Ram: ${computadora.ram} - Almacenamiento: ${computadora.almacenamiento}`)
    })
}
function filtrarComputadora(){
    const resultado = computadoras.filter(filtrarTipo).filter(filtrarMarca).filter(filtrarModelo).filter(filtrarRam).filter(filtrarAlmacenamiento);
    if(resultado.length){
        mostrarComputadoras(resultado);
    }else {
        console.log("sin resultado");
    }
}
function filtrarTipo(computadora){
    if(datosBusqueda.tipo){
        return computadora.tipo === datosBusqueda.tipo;
    }
    return computadora;
}
function filtrarMarca(computadora){
    if(datosBusqueda.marca){
        return computadora.marca === datosBusqueda.marca;
    }
    return computadora;
}
function filtrarModelo(computadora){
    if(datosBusqueda.modelo){
        return computadora.modelo === datosBusqueda.modelo;
    }
    return computadora;
}
function filtrarRam(computadora){
    if(datosBusqueda.ram){
        return computadora.ram === datosBusqueda.ram;
    }
    return computadora;
}
function filtrarAlmacenamiento(computadora){
    if(datosBusqueda.almacenamiento){
        return computadora.almacenamiento === datosBusqueda.almacenamiento;
    }
    return computadora;
}
filtrarComputadora(computadoras)