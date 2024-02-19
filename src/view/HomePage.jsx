import { Container } from "react-bootstrap";

import React from 'react'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <Container style={{width:'80%'}}>
        <h1>bienvenido a <b>Happy Cake</b></h1>
        <p>El lugar de los pasteles felices</p>  
        <Home />
    </Container>
  )
}

export default HomePage