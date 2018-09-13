import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa } from 'mdbreact';

class Projects extends Component {
  render() {
    return(
      <Container>
        <section className="text-center my-5 padding-top">
          <h2 className="h1-responsive font-weight-bold my-5">Our best projects</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
          <Row className="d-flex justify-content-center">
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="green-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="line-chart" className="pr-2"/>Marketing</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="blue-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="eye" className="pr-2"/>Entertainment</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="brown-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="camera" className="pr-2"/>Travel</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="cyan-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="phone" className="pr-2"/>Technology</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default Projects;