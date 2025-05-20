const string = "Hola desde Componente 2";
const array = [1, 2, 3, 4, 5]
const funcion = () => 1 + 1
export const Componente2 = ({titulo}) => {
    /* console.log(titulo) */
    return (
        <>{/* Esto en realidad en un Fragmentpero ahora se deja vacia  */}
            <h1>Promps: {titulo}</h1>
            <h2>:{funcion()}</h2> 
            <p>{array}</p>
            <p>{string}</p>
        </>
    )
}

export default Componente2;