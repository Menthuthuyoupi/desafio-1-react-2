import React from 'react'
import PropTypes from 'prop-types'

import Alert from 'react-bootstrap/Alert';

const Alerta = ({validarForm,errorText,errorMail}) => {
  return (
    <>
        <p className='mt-3'>
            {
                validarForm ? (!(errorMail || errorText) ?
                <Alert variant='success' style={{width:'60%',margin:'auto'}}>
                    Formulario enviado
                </Alert> : 
                <Alert variant='danger' style={{width:'60%',margin:'auto'}}>
                    Completar todo el formulario
                </Alert>) :  null
            }
        </p>
    </>
  )
}

Alerta.propTypes = {}

export default Alerta