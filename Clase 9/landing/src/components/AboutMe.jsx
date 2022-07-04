import React from "react";

const AboutMe = () => {
    return (
        <div id="about-me">
            <div className="row row-cols-1 row-cols-md-2 g-4 m-5">
                <div className="w-100 text-center">
                    <h3 className="text-white">Sobre nosotros</h3>
                    <hr className="text-white"/>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Estrategias de distribucion</h5>
                        <p className="card-text">Contamos con una estrategia de geolocalizacion mediante la cual podemos calcular la mejor ruta posible para llegar en tiempo y forma.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Calidad premium</h5>
                        <p className="card-text">Nos centramos en siempre contar con la mejor calidad en carnes vacunas, la calidad es lo mas importante para nosotros</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Mejores precios</h5>
                        <p className="card-text">Nuestros precios son competitivos con el mercado, ofrecemos diversos medios de pago, pero con el diferencial que contamos con calidad premium.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Atencion 24hs</h5>
                        <p className="card-text">Mediante la automatizacion de nuestros servicios, contamos con atencion las 24hs para que puedas realizar tu pedido en cualquier momento del dia.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;