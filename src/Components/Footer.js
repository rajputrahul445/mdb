import React from 'react';
import { NavLink } from 'mdbreact';

import { Container, Row} from 'mdbreact';
class Footer extends React.Component {
    render() {
        return (
                <div className="footer_bottom">
                <Container>
                    <Row>
                        <div className="col-sm-8 col-xs-12">
                            <div className="footer_nav">
                                <ul className="list-inline">
                                    <li>
                                        <NavLink to="/Home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Projects">Projects</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Team">Team</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Contact">Contact</NavLink>
                                    </li>
                                </ul>
                                <p><NavLink to="/">Designed by: www.demo.com /</NavLink> Images from: www.wallpaperswide.com / Copyright(c) website name. </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <ul className="list-inline social_icons">
                                <li>
                                    <NavLink to="/"><i className="fa fa-facebook"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><i className="fa fa-twitter"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><i className="fa fa-linkedin"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
                </div>
        );
    }
}

export default Footer;