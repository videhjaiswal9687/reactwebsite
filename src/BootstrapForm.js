import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, Table, Dropdown, DropdownButton} from 'react-bootstrap';
//npm install react-bootstrap bootstrap

export default class BootstrapForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2>Enquiry Form</h2>
                    <Row>
                        <Col sm={6}>
                            <Form>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Name"/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" name="email" placeholder="Email"/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>City:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="New Delhi">New Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Kolkatta">Kolkatta</option>
                                        <option value="Chennai">Chennai</option>
                                    </Form.Control>
                                    <Form.Group controlId="FormGroupName">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" name="Message"/>
                                    </Form.Group>
                                    <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
</Form>
                                    <Form.Group>
                                        <Button variant="primary">Submit</Button>
                                    </Form.Group>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 12 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
        )
    }
}
