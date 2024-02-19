import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Alerta from './Alerta'

import { useState } from 'react'

import React from 'react'
import PropTypes from 'prop-types'

const Contacts = props => {

  const [mail,setMail] = useState('')
  const [text, setText] = useState('')

  const [errorMail,setErrorMail] = useState(false)
  const [errorText,setErrorText] = useState(false)

  const [validarForm,setValidarForm] = useState(false)

  const validarInput = (e) => {
    setValidarForm(true)
    e.preventDefault()
    if(mail === '' || text === ''){

      const validarMail = () => {
        if(mail === ''){
          setErrorMail(true)
        }else{
          setErrorMail(false)
        }
      }
      validarMail()

      const validarText = () => {
        if(text === ''){
          setErrorText(true)
        }else{
          setErrorText(false)
        }
      }
      validarText()

    }else{
      setErrorMail(false)
      setErrorText(false)
    }
  }

  return (
    <Form onSubmit={validarInput}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control className={errorMail ? 'error' : 'inputs'} type="email" placeholder="name@example.com" 
            onChange={(e) => setMail(e.target.value)} value={mail}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control className={errorText ? 'error' : 'inputs'} as="textarea" rows={3} 
            onChange={(e) => setText(e.target.value)} value={text}/>
        </Form.Group>
        <Button variant="primary" type="submit">Enviar</Button>
        <Alerta validarForm={validarForm} errorMail={errorMail} errorText={errorText} />
    </Form>
  )
}

Contacts.propTypes = {}

export default Contacts