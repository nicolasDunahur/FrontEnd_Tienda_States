import React, { Fragment } from 'react';


const Producto = ({producto, productos, changuito, setChanguito }) => {

    const {id, articulo,precio} = producto;      

    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id)[0];
            setChanguito([
                ...changuito,
                producto
            ]);
        console.log(producto);
    };

    const eliminarProducto = (id) => {
        const producto = changuito.filter(
            producto => producto.id !== id);
            setChanguito(producto);
    };
    
    return (
        <Fragment>
            <div> 
                <h3>{id} {articulo} {precio}</h3>
                {
                    productos
                    ? 
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                        > Comprar 
                    </button>
                    :
                    <button
                        type= "button"
                        onClick={() => eliminarProducto(id)}
                    >Eliminar</button>
                }
            </div>
        </Fragment>
    );   
}

export default Producto;