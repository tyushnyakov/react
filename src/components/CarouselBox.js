import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BugelImg from '../assets/bugel.jpg';
import SkiImg from '../assets/ski.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ BugelImg }
                        alt="bugel"
                    />
                    <Carousel.Caption>
                        <h3>Bugel image</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ SkiImg }
                        alt="ski"
                    />
                    <Carousel.Caption>
                        <h3>Ski image</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
