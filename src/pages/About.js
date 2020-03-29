import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'


export default class About extends Component {
    render() {
        return (
           <Container >
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">First</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Second</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Third</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img style={{width: '500px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFgvwwQ36AparwslFG4iKoeQDK6X6arD2T4X5wWxnkoHbugsWS"/>
                                    <p>Lorem ipsum dolor</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img style={{width: '500px'}} src="https://lh3.googleusercontent.com/proxy/W_ocqydBEb5h1O8wUshHc0pAO96Lc3qt5zjg3FGn6djDTQK2te0O01z4v_629J0uw0Ljlpj33cBYO98uK8z9EESLUlJ6yPZPX_BvhS8_9W8-081DmTQhZLy_QLz1YW10"/>
                                    <p>Lorem ipsum dolor</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img style={{width: '500px'}} src="https://klike.net/uploads/posts/2019-06/medium/1560661366_2.jpg"/>
                                    <p>Lorem ipsum dolor</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img style={{width: '500px'}} src="https://klike.net/uploads/posts/2019-06/1560661436_1.jpg"/>
                                    <p>Lorem ipsum dolor</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        )
    }
}
