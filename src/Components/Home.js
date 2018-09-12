import React from 'react';
import { Container, Row, Col, Fa, Button, Avatar, Card, CardBody } from 'mdbreact';

class Home extends React.Component {
   

   
    render() {
       
        return (
            <main>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />
                    </div>
                </div>
                <Container>
                    <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <Row>
                        <Col md="4">
                        <Fa icon="area-chart" size="3x" className="red-text"/>
                        <h5 className="font-weight-bold my-4">Analytics</h5>
                        <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
                        </Col>
                        <Col md="4">
                        <Fa icon="book" size="3x" className="cyan-text"/>
                        <h5 className="font-weight-bold my-4">Tutorials</h5>
                        <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
                        </Col>
                        <Col md="4">
                        <Fa icon="comments-o" size="3x" className="orange-text"/>
                        <h5 className="font-weight-bold my-4">Support</h5>
                        <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
                        </Col>
                    </Row>
                    </section>

                </Container>
                
            </main>
        );
    }
}

export default Home;