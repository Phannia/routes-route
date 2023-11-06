import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


const Contact = () => {
  return (
    <>
    {/* Contenedor de formulario */}
      <Container style={{ width: '50%', height: '90vh' }}>
        <h1 className='py-5'>Cuentanos, ¿en qué podemos ayudarte?</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="success">Enviar</Button>{' '}
        </Form>
      </Container>
    </>
  )
}

export default Contact