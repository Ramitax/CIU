import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ( {agregarSocio} ) => {

    const [socio, editarSocio] = useState({
        nombre: "",
        dni: ""
    });

    const [error, setError] = useState(false);

    const {nombre, dni} = socio;

    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(nombre.trim() === '' || dni.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        socio.id = uuidv4();
        agregarSocio(socio);
        editarSocio({
            nombre: "",
            dni: ""
        })
    };

    return (
        <Fragment>
            <Form
                onSubmit={submitForm}>
                <Form.Group
                    className='mt-3'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value = {nombre}
                    />
                </Form.Group>

                <Form.Group
                    className='mt-3'>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="DNI"
                        name="dni"
                        onChange={handleChange}
                        value = {dni}
                    />
                </Form.Group>
                <Button
                    className='mt-3' 
                    variant="primary" 
                    type="submit">
                    Ingresar socio
                </Button>
            </Form>
            {
                error 
                    ? <h4>Falta completar datos</h4> 
                    : null
            }
        </Fragment>
    );
}

export default Formulario;
