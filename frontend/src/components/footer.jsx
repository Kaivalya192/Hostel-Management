import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>
          &copy; {new Date().getFullYear()} Developed by Kaivalya Shah , Vidit Paladiya and Vivan Selarka
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
