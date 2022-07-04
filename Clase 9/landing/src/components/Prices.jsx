import React from "react";

const Prices = () => {
    return (
        <div id="prices" className="m-5">
            <div className="w-100 text-center">
                    <h3 className="text-white">Precios por kilo</h3>
                    <hr className="text-white"/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <table className="table table-dark table-hover w-50 text-center">
                    <thead>
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Higado</td>
                            <td>$60</td>
                        </tr>
                        <tr>
                            <td>Corazon</td>
                            <td>$90</td>
                        </tr>
                        <tr>
                            <td>Rabos</td>
                            <td>$50</td>
                        </tr>
                        <tr>
                            <td>Chichulin</td>
                            <td>$30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Prices;