import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react'

import CardInfo from './CardInfo'

import TortaUno from '../assets/img/torta-uno.jpg'
import TortaDos from '../assets/img/torta-dos.jpg'
import TortaTres from '../assets/img/torta-tres.jpeg'
import TortaCuatro from '../assets/img/torta-cuatro.jpg'

const Home = () => {
  return (
    <Container>
        <Row className='mt-4 mb-3'>
            <Col>
                <CardInfo img={TortaUno} title='Torta Clasica' description='Bizcocho húmedo con chocolate,
                    relleno con manjar de dulce de leche, cubierta con crema de leche natural y rayadura de chocolate.' />
            </Col>
            <Col>
                <CardInfo img={TortaDos} title='Torta Mixta' description='Esponjoso bizcochuelo de chocolate
                    relleno con crema chantilly, manjar y frescas nueces.' />
            </Col>
            <Col>
                <CardInfo img={TortaTres} title='Torta de Matrimonio' description='torta de biscocho rellena de crema,
                    manjar y frutas'/>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardInfo img={TortaCuatro} title='Torta de Chocolate' description='Torta de chocolate rellena con dulces
                    e chocolates y galletas bañadas en chocolate' />
            </Col>
            <Col>
                <CardInfo img={TortaUno} title='Torta Clasica' description='Bizcocho húmedo con chocolate,
                    relleno con manjar de dulce de leche, cubierta con crema de leche natural y rayadura de chocolate.' />
            </Col>
            <Col>
                <CardInfo img={TortaDos} title='Torta Mixta' description='Esponjoso bizcochuelo de chocolate
                    relleno con crema chantilly, manjar y frescas nueces.' />
            </Col>
        </Row>
    </Container>
  )
}

export default Home