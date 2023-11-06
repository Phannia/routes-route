import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image';
import CuteCake from '../assets/img/CuteCake.png'

const Home = () => {
  return (
    <>
      <Container style={{ width: '50%', height: '90vh' }} className="text-center pt-5">
          <h1>Bienvenido a <strong>Happy Cake</strong></h1>
          <h5>El lugar de los pasteles felices</h5>
          <Image style={{ width: '50%' }} src={CuteCake} rounded />
      </Container>
    </>
  )
}

export default Home