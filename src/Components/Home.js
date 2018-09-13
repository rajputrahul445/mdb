import React from 'react';
import { Container, Row, Col, Fa,  Mask, View } from 'mdbreact';

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
                

                <Container>
                <h2 className="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
                <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
                <Row>
                    <Col lg="6" md="12">
                    <div>
                        <View hover rounded className="z-depth-1-half mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample image"/>
                        <a>
                            <Mask overlay="white-slight" className="waves-light"/>
                        </a>
                        </View>
                        <div className="d-flex justify-content-between">
                        <a className="light-blue-text"><h6 className="font-weight-bold"><Fa icon="plane" className="pr-2"/>Travels</h6></a>
                        <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>20/08/2018</p>
                        </div>
                        <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
                        <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    </div>

                    <div>
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">19/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>

                    <div>
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">18/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>

                    <div className="mb-4">
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">17/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Voluptatem accusantium doloremque</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>
                    </Col>

                    <Col lg="6" md="12">
                    <div>
                        <View hover rounded className="z-depth-1-half mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
                        <a>
                            <Mask overlay="white-slight" className="waves-light"/>
                        </a>
                        </View>
                        <div className="d-flex justify-content-between">
                        <a className="pink-text"><h6 className="font-weight-bold"><Fa icon="home" className="pr-2"/>Lifestyle</h6></a>
                        <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>24/08/2018</p>
                        </div>
                        <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
                        <p className="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    </div>

                    <div>
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">23/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>

                    <div>
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">22/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>

                    <div className="mb-4">
                        <Row>
                        <Col md="3">
                            <View hover rounded className="z-depth-1-half mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg" alt="Sample image"/>
                            <a>
                                <Mask overlay="white-slight" className="waves-light"/>
                            </a>
                            </View>
                        </Col>
                        <Col md="9">
                            <p className="font-weight-bold dark-grey-text">21/08/2018</p>
                            <div className="d-flex justify-content-between">
                            <Col size="11" className="text-truncate pl-0 mb-3">
                                <a className="dark-grey-text">Maiores alias consequatur aut perferendis</a>
                            </Col>
                            <a><Fa icon="angle-double-right"/></a>
                            </div>
                        </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
                </Container>
                
            </main>
        );
    }
}

export default Home;