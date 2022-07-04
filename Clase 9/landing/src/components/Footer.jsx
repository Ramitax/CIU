import React from "react";

const Footer = () => {
    return (
        <div id="footer">
             <hr className="text-white"/>
             <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="text-white fs-4">Contacto</h5>
                </div>
             </div>
             <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                    <a type="button" className="btn btn-success m-2">Whatsapp</a>
                    <a type="button" className="btn btn-primary m-2">Facebook</a>
                </div>
             </div>
        </div>
    );
}

export default Footer;