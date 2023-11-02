import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody'>
      <Row md={3}>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>About us</h1>
          <p>
            created for Xenonstack technical task
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage1'>
          <h1>Developer</h1>
          <p>
            Designed and developed by{' '}
            Karandeep singh{' '}
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> *************
          <br />
          
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
