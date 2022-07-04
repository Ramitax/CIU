import React from "react";

const Service = ( {data} ) => {
    // Codigo JS de este componente
    const {id, servicio, valor} = data;
    return (
        <div>
            <h3>{id} - {servicio} - {valor}</h3>
        </div>
    );
}

export default Service;