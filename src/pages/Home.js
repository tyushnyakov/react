import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
           <>
           <CarouselBox />
           <Container>
               <h2 className="text-center m-4">Our team</h2>
               <CardDeck className="m-4">
                    <Card bg="warning" border="primary">
                        <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="success" border="primary">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img
                        variant="bottom"
                        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </Card>
                    <Card bg="info" border="primary">
                        <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
               </CardDeck>
           </Container>
           </>
        )
    }
}
