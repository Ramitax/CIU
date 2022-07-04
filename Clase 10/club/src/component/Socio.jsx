import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button} from 'react-bootstrap';

const Socio = ( {socio, borrarSocio} ) => {
    return (
        <Fragment>
            <Card >
                <Card.Body className='text-center'>
                    <Card.Title>{socio.nombre}</Card.Title>
                    <hr/>
                    <Card.Text>{socio.dni}</Card.Text>
                    <Button variant="success" className='m-2'>Editar</Button>
                    <Button 
                        variant="danger"
                        onClick={ () => borrarSocio(socio.id)}>
                        Eliminar
                    </Button>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default Socio;