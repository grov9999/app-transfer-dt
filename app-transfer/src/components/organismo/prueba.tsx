
const Prueba = () => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg p-4">
            <div className="overflow-auto max-h-60 p-2 border border-gray-300">
                <p>Contenido del log...</p>
            </div>

            {/* Botón colgante */}
            <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                Aprobar
            </button>
        </div>
    )
}

export default Prueba
