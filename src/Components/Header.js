import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/Home">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem>
                              <NavLink to="/Home">Home</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Features</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Projects">Projects</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Team">Team</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Blog">Blog</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Contact">Contact</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default Header;