import { Container } from "react-bootstrap";

import React from 'react'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <Container style={{width:'80%'}}>
        <h1>bienvenido a Happy Cake</h1>
        <Home />
    </Container>
  )
}

export default HomePage