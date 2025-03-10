import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
function App() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">Grupo Yalasoftsd</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="my-5 d-flex justify-content-center vh-100">

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
