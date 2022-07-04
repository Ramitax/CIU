import React, {Fragment, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import Formulario from './component/Formulario';
import Socio from './component/Socio';

function App() {

  const [socios, editarSocios] = useState([]);

  const agregarSocio = (socio) => {
    editarSocios([
      ...socios,
      socio
    ]);
  }

  const borrarSocio = (id) => {
    const newSocios = socios.filter( socio => socio.id !== id);
    editarSocios(newSocios);
  }
  
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>TODO List</Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarSocio = {agregarSocio}
            />
          </Col>
          <Col>
          {
            socios.map( (socio) => {
              return <Socio 
                        socio = {socio}
                        borrarSocio = {borrarSocio}
                        key= {socio.id}
                      />
            })
          }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
