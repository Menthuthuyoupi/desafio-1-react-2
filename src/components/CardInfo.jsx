import React from 'react'
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card';

const CardInfo = ({img,title,description}) => {
    return (
        <Card style={{ width: '100%', height:'100%'}}>
            <Card.Img variant="top" src={img} style={{width:'100%', height:'250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    )  
}

CardInfo.propTypes = {}

export default CardInfo