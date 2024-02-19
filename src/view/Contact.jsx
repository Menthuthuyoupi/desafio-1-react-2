import { Container } from "react-bootstrap";
import React from 'react'

import Contacts from '../components/Contacts'

const Contact = () => {
  return (
    <Container style={{width:'80%'}}>
        <h2>Cuentanos, ¿En que te podemos ayudar?</h2>
        <Contacts/>
    </Container>
  )
}

export default Contact