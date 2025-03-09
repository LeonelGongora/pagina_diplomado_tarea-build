import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
function App() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Grupo Jalasoft</Navbar.Brand>
        </Container>
      </Navbar>

      <div className='contenido-grupo'>

        <div>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Gualberto Choque Choque</ListGroup.Item>
            <ListGroup.Item as="li">Rodrigo Flores Villarroel</ListGroup.Item>
            <ListGroup.Item as="li">Leonel Julio Gongora Angles</ListGroup.Item>
            <ListGroup.Item as="li">Sol Abril Marquez Diaz</ListGroup.Item>
            <ListGroup.Item as="li">Neida Jessica Trujillo Delgadillo</ListGroup.Item>
            <ListGroup.Item as="li">Brandon Alejandro Stambuk</ListGroup.Item>
          </ListGroup>
        </div>

      </div>
    </>
  )
}

export default App
