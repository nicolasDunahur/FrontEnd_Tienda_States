import Header from './components/Header';
import {useState, Fragment} from 'react';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Changuito from "./components/Changuito"

function App() {
    const [productos, guardarProductos] = useState([
        {id:1, articulo:"Guitarra criolla", precio:125000},
        {id:2, articulo:"Guitarra electrica", precio:72500},
        {id:3, articulo:"Bajo", precio:215000},
        {id:4, articulo:"Bateria", precio:125000},
        {id:5, articulo:"Mic", precio:58000},
    ]);
    
    const [changuito, setChanguito] = useState([]);
    
    return(
        <Fragment>
            <Header/>
            <h1>Instrumentos Musicales SA - Compre online</h1>
            {productos.map(producto =>
                (
                    <Producto
                        key={producto.id}
                        producto = {producto}
                        productos = {productos}
                        changuito = {changuito}
                        setChanguito = {setChanguito}
                    />
                )
                )}

            <Changuito
                changuito = {changuito}
                setChanguito = {setChanguito}
            />            

            <Footer
             anio={"2021"}
             />
        </Fragment>
    );
}

export default App;

