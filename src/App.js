import React from 'react';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/Store'
import {Container, Row,Col} from 'react-bootstrap'
import Cartcomponent from './components/Cart/Cartcomponent';

function App() {
  return (
     <Provider  store={store}>
    <Container>
    <Row>
     <Col> <h1> YOUR SHOPPING CART </h1></Col>
    </Row>
    <Row>
     <Col> <Cartcomponent/></Col>
    </Row>
      </Container>
          </Provider>
  );
}

export default App;
