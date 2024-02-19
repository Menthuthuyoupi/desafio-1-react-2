import { Container, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const Navigation = () => {
  return (
    <Navbar className='justify-content-space-between' style={{backgroundColor:'#C70039',width:'100%'}}>
        <Container className='justify-content-start text-white'>
            <FontAwesomeIcon icon={faHouse}/>
            <Link to='/' className="text-white ms-1 me-4 text-decoration-none">Home</Link>

            <FontAwesomeIcon icon={faBook}/>
            <Link to='contact' className="text-white ms-1 text-decoration-none">Contacto</Link>
        </Container>
        <Container className='justify-content-end pe-5 text-white'>
          <Navbar.Brand className='me-1 text-white'>Happy Cake</Navbar.Brand>
          <FontAwesomeIcon icon={faCakeCandles}/>
        </Container>
    </Navbar>
  )
}

export default Navigation